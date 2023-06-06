package com.ustckdgc.mobile.framework;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;

import com.kdgc.dblib.AppDatabase;
import com.kdgc.dblib.dao.ScannerResultDao;
import com.kdgc.dblib.entity.ScannerResultBean;
import com.ustcinfo.mobile.platform.ability.ui.WebviewActivity;
import com.ustckdgc.mobile.framework.adapter.AppNameListAdapter;
import com.ustckdgc.mobile.framework.application.MAppliction;
import com.ustckdgc.mobile.framework.utils.Constants;
import com.uuzuche.lib_zxing.ScannerActivity;
import com.uuzuche.lib_zxing.activity.CodeUtils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SplashActivity extends Activity {
    private LinearLayout mLlScannerResult;
    private ImageView mIvScanner;
    private RecyclerView mRvAppNameList;
    private ArrayList<ScannerResultBean> mScannerResultBeanList = new ArrayList<>();
    private AppNameListAdapter mAppNameListAdapter;

    @Override
    protected void onCreate(@Nullable @org.jetbrains.annotations.Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.layout_splash_activity);
        initView();
        initClick();
        initData();
    }

    private void initData() {
        new Thread(new Runnable() {
            @Override
            public void run() {
                ScannerResultDao scannerResultDao = AppDatabase.getDatabase(MAppliction.mApplicationContext).scannerResultDao();
                List<ScannerResultBean> dataList = scannerResultDao.getAllScannerResult();
                if (dataList.isEmpty()) {
                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            mLlScannerResult.setVisibility(View.GONE);
                            Intent intent = new Intent(SplashActivity.this, ScannerActivity.class);
                            startActivityForResult(intent, Constants.SCANNER_REQUEST_CODE);
                        }
                    });
                } else {
                    mScannerResultBeanList.clear();
                    mScannerResultBeanList.addAll(dataList);
                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            mLlScannerResult.setVisibility(View.VISIBLE);
                            mAppNameListAdapter.notifyDataSetChanged();
                        }
                    });
                }
            }
        }).start();
    }

    private void initView() {
        mLlScannerResult = findViewById(R.id.ll_scanner_result);
        mIvScanner = findViewById(R.id.iv_scanner);
        mRvAppNameList = findViewById(R.id.rv_app_name_list);

        GridLayoutManager gridLayoutManager = new GridLayoutManager(this,2);
        mRvAppNameList.setLayoutManager(gridLayoutManager);
        mAppNameListAdapter = new AppNameListAdapter(this, mScannerResultBeanList);
        mRvAppNameList.setAdapter(mAppNameListAdapter);
    }

    private void initClick() {
        mIvScanner.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(SplashActivity.this, ScannerActivity.class);
                startActivityForResult(intent, Constants.SCANNER_REQUEST_CODE);
            }
        });

        mAppNameListAdapter.setOnItemClickListener(new AppNameListAdapter.OnItemClickListener() {
            @Override
            public void onItemClicked(int position) {
                Intent intent = new Intent(SplashActivity.this, WebviewActivity.class);
                intent.putExtra("starturl", mScannerResultBeanList.get(position).getUrl());
                startActivity(intent);
            }
        });

        mAppNameListAdapter.setOnItemLongClickListener(new AppNameListAdapter.OnItemLongClickListener() {
            @Override
            public void onItemLongClick(int position) {
                final String deleteBeanCode = mScannerResultBeanList.get(position).getCode();
                mScannerResultBeanList.remove(position);
                mAppNameListAdapter.notifyDataSetChanged();
                new Thread(new Runnable() {
                    @Override
                    public void run() {
                        ScannerResultDao scannerResultDao = AppDatabase.getDatabase(MAppliction.mApplicationContext).scannerResultDao();
                        ScannerResultBean exitBean = scannerResultDao.getScannerResultByCode(deleteBeanCode);
                        if (exitBean != null) scannerResultDao.delete(exitBean);
                    }
                }).start();
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode == Activity.RESULT_OK) {
            if (requestCode == Constants.SCANNER_REQUEST_CODE) {
                // 去除空格换行
                final String scannerResult = data.getStringExtra(CodeUtils.RESULT_STRING).replaceAll("\\n", "").replaceAll("\\s", "").replaceAll("\\{", "");
                if (scannerResult.contains("code") && scannerResult.contains("url")) {
                    new Thread(new Runnable() {
                        @Override
                        public void run() {
                            Map<String, String> dataMap = parseData(scannerResult);
                            String code = dataMap.get("code");
                            String name = dataMap.get("name");
                            final String url = dataMap.get("url");
                            ScannerResultDao scannerResultDao = AppDatabase.getDatabase(MAppliction.mApplicationContext).scannerResultDao();
                            ScannerResultBean exitBean = scannerResultDao.getScannerResultByCode(code);
                            if (exitBean != null) scannerResultDao.delete(exitBean);
                            ScannerResultBean newBean = new ScannerResultBean();
                            newBean.setCode(code);
                            newBean.setName(name);
                            newBean.setUrl(url);
                            scannerResultDao.insert(newBean);

                            runOnUiThread(new Runnable() {
                                @Override
                                public void run() {
                                    Intent intent = new Intent(SplashActivity.this, WebviewActivity.class);
                                    intent.putExtra("starturl", url);
                                    startActivity(intent);
                                }
                            });

                            initData();
                        }
                    }).start();
                } else {
                    // 暂定扫码得到的只是个url
                    //Toast.makeText(this, "暂不支持该类二维码", Toast.LENGTH_SHORT).show();
                }
            }
        }
    }

    // 解析非标准json格式的数据字符串
    public Map<String, String> parseData(String URL) {
        Map<String, String> mapRequest = new HashMap<String, String>();
        String[] arrSplit = null;

        //每个键值为一组 www.2cto.com
        arrSplit = URL.split(",");
        for (String strSplit : arrSplit) {
            String[] arrSplitEqual = null;
            arrSplitEqual = strSplit.split("\":");

            //解析出键值
            if (arrSplitEqual.length > 1) {
                //正确解析
                mapRequest.put(arrSplitEqual[0].replace("\"", ""), arrSplitEqual[1].replace("\"", ""));
            } else {
                if (arrSplitEqual[0] != "") {
                    //只有参数没有值，不加入
                    mapRequest.put(arrSplitEqual[0].replace("\"", ""), "");
                }
            }
        }
        return mapRequest;
    }

}
