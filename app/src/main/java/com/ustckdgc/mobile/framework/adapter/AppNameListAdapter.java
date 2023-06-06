package com.ustckdgc.mobile.framework.adapter;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.kdgc.dblib.entity.ScannerResultBean;
import com.ustckdgc.mobile.framework.R;

import java.util.List;

public class AppNameListAdapter extends RecyclerView.Adapter<AppNameListAdapter.ViewHolder> {
    private Context mContext;
    private List<ScannerResultBean> mList;
    private OnItemClickListener mOnItemClickListener;
    private OnItemLongClickListener mOnItemLongClickListener;

    public AppNameListAdapter(Context context, List<ScannerResultBean> list) {
        this.mContext = context;
        this.mList = list;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup viewGroup, int i) {
        View view = LayoutInflater.from(viewGroup.getContext()).inflate(R.layout.item_app_name, viewGroup, false);
        return new ViewHolder(view, mOnItemClickListener, mOnItemLongClickListener);
    }

    @Override
    public void onBindViewHolder(ViewHolder viewHolder, int i) {
        ScannerResultBean bean = mList.get(i);
        viewHolder.tv_app_name.setText(bean.getName());
    }

    @Override
    public int getItemCount() {
        return mList.size();
    }

    static class ViewHolder extends RecyclerView.ViewHolder {
        TextView tv_app_name;

        public ViewHolder(View itemView, final OnItemClickListener itemClickListener, final OnItemLongClickListener itemLongClickListener) {
            super(itemView);
            tv_app_name = itemView.findViewById(R.id.tv_app_name);

            itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    itemClickListener.onItemClicked(getAdapterPosition());
                }
            });

            itemView.setOnLongClickListener(new View.OnLongClickListener() {
                @Override
                public boolean onLongClick(View v) {
                    itemLongClickListener.onItemLongClick(getAdapterPosition());
                    return true;
                }
            });
        }
    }

    public void setOnItemClickListener(OnItemClickListener clickListener) {
        this.mOnItemClickListener = clickListener;
    }

    public interface OnItemClickListener {
        void onItemClicked(int position);
    }

    public void setOnItemLongClickListener(OnItemLongClickListener longClickListener) {
        this.mOnItemLongClickListener = longClickListener;
    }

    public interface OnItemLongClickListener {
        void onItemLongClick(int position);
    }

}
