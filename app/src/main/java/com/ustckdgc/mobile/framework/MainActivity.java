package com.ustckdgc.mobile.framework;

import com.ustcinfo.mobile.platform.ability.jsbridge.BridgeWebView;
import com.ustcinfo.mobile.platform.ability.ui.WebviewActivity;


public class MainActivity extends WebviewActivity {

    /**
     * 可以在此方法中自定义原生交互的方法
     */
    @Override
    public void registerMethods(BridgeWebView bridgeWebView) {
    }

    @Override
    protected void onResume() {
        super.onResume();
    }

}
