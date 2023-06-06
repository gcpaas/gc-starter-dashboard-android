package com.ustckdgc.mobile.framework.application;

import android.content.Context;

import com.amap.api.location.AMapLocationClient;
import com.ustcinfo.mobile.platform.ability.application.AbilityApplication;
import com.uuzuche.lib_zxing.activity.ZXingLibrary;
import com.zbar.CameraManager;

public class MAppliction extends AbilityApplication {
    public static Context mApplicationContext;

    @Override
    public void onCreate() {
        super.onCreate();
        mApplicationContext = this;
        // 初始化zxing
        ZXingLibrary.initDisplayOpinion(this);
        // 初始化zbar
        //CameraManager.init(getApplicationContext());

        AMapLocationClient.updatePrivacyAgree(getApplicationContext(), true);
        AMapLocationClient.updatePrivacyShow(getApplicationContext(), true, true);
    }
}
