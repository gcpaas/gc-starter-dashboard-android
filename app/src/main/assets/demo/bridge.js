/**
 * Created by chenlinfang on 2017/10/24.
 ＊国创移动应用能力平台js封装
 */

(function() {
	var mplat = {
		init: function(callback) {
			connectWebViewJavascriptBridge(function(bridge) {
				bridge.init(function(message, responseCallback) {
					var data = {
						'Javascript Responds': 'Wee!'
					};
					alert(message);
					responseCallback(data);
				});
				if (callback) {
					callback();
				}

			})

		},
		debug: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'debug', {},
				function(responseData) {
					if (callback != null)
						callback(responseData)
				}
			);
		},

		getUserInfos: function(callback) {
			/**
			 * 获取用户信息方法
			 * @param {Object} options : param(参数) callback（回调函数，返回data ）
			 */
			window.WebViewJavascriptBridge.callHandler(
				'getUserInfos', {
					"params": "获取用户数据"
				},
				function(responseData) {
					if (callback != null)
						callback(responseData)
				}
			);
		},
		/**
		 *辅助H5页面定位
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */

		startH5AssistantLocation: function(callback) {

			window.WebViewJavascriptBridge.callHandler(
				'startH5AssistantLocation', {},
				function(responseData) {
					if (callback != null)
						callback(responseData)
				}
			);

		},
		stopH5AssistantLocation: function(callback) {

			window.WebViewJavascriptBridge.callHandler(
				'stopH5AssistantLocation', {},
				function(responseData) {
					if (callback != null)
						callback(responseData)
				});
		},
		/**
		 * 拍照
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		takePhotosWithIdentity: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'takePhotoWithIdentity', {
					'params': str
				},
				function(responseData) {
					if (options.callback)
						options.callback(responseData);
				}
			);
		},

		/**
		 * 拍照
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		takePhoto: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'takePhoto', {
					'params': str
				},
				function(responseData) {
					if (options.callback)
						options.callback(responseData);
				}
			);
		},
		/**
		 * 设置状态栏
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		modifyStatus: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'modifyStatus', {
					'params': str
				},
				function(responseData) {
					if (options.callback)
						options.callback(responseData);
				}
			);
		},
		/**
		 * 保持屏幕长亮
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		KeepScreenOn: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'KeepScreenOn', {},
				function(responseData) {
					if (callback != null)
						callback(responseData)
				}
			);
		},
		/**
		 * 扫码
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		scanGetCode: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'scanGetCode', {
					'params': str
				},
				function(responseData) {
					if (options.callback)
						options.callback(responseData);
				}
			);
		},

		/**
		 * 从相册中选择
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		pickPic: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'pickPic', {
					'params': str
				},
				function(responseData) {
					if (options.callback)
						options.callback(responseData);
				}
			);

		},

		/**
		 * 显示加载框
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		showLoading: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'showLoading', {
					"params": str
				}
			);
		},

		/**
		 * 取消加载框
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		cancelLoading: function(options) {
			window.WebViewJavascriptBridge.callHandler('cancelLoading');
		},
		/**
		 * 支付宝支付
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		alipay: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.orderInfo = encodeURIComponent(params.orderInfo);
				str = typeof(params) == "object" ? JSON.stringify(params) + str : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'alipay', {
					"params": str
				}
			);
		},
		/**
		 * 微信支付
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		wxpay: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) + str : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'wxpay', {
					"params": str
				}
			);
		},
		/**
		 * 定位
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		getLocationInfo: function(options) {
			window.WebViewJavascriptBridge.callHandler('getLocationInfo');
		},

		/**
		 * 打电话
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		telephoneCall: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'telephoneCall', {
					"params": str
				}
			);
		},

		/**
		 * 发送短信
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		shortMessage: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'shortMessage', {
					"params": str
				});
		},



		/**
		 * 获取手机硬件信息
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		getPhoneDeviceName: function(options) {
			window.WebViewJavascriptBridge.callHandler(
				'getPhoneDeviceName',
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},

		/**
		 * 数据库－建表操作
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		createTableInfo: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'createTableInfo', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},

		/**
		 * 数据库－插入数据操作
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		insertInfo: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'insertInfo', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},

		/**
		 * 数据库查询数据操作
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		selectInfos: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'selectInfos', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},

		/**
		 * 数据库－删除数据操作
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		deleteInfo: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'deleteInfo', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},

		/**
		 * 数据库－更新数据操作
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		updateInfo: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'updateInfo', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},

		/**
		 * 数据库－删除表操作
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		dropTable: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'dropTable', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},
		/**
		 * 锁屏
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		lockScreen: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'lockScreen', {
					"params": str
				}
			);
		},

		/**
		 * 截屏
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		screenShot: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'screenShot', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},

		/**
		 * 调节屏幕亮度
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		changeScreenIntensity: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'changeScreenIntensity', {
					"params": str
				});
		},

		/**
		 * 录音
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		recordVoice: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'recordVoice', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},
		/**
		 * 开始录音
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		startRecordVoice: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'startRecordVoice', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},
		/**
		 * 取消录音
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		cancleRecordVoice: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'cancleRecordVoice', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},
		/**
		 * 停止录音
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		stopRecordVoice: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'stopRecordVoice', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},

		/**
		 * 录音播放
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		playVoice: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.playPath = params.playPath.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'playVoice', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},
		/**
		 * 录音播放
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		playVoiceWithNoUI: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.playPath = params.playPath.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'playVoiceWithNoUI', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},
		stopVoiceWithNoUI: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'stopVoiceWithNoUI', {},
				function(responseData) {
					if (callback != null)
						callback(responseData)
				}
			);
		},
		//上传
		uploadVoice: function(options) {
			var params = options.params;
			//录音最短时间
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'uploadVoice', {
					"params": str
				}
			);
		},
		//录制视频
		RecordVideo: function(options) {
			var params = options.params;
			//录制视频最长时间
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'RecordVideo', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},
		// 播放视频
		playVideo: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.playPath = params.playPath.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'playVideo', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},
		//获取包名
		getPackInfor: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'getPackInfor', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},
		//获取wifi信息
		getWifiInfo: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'getWifiInfo', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},
		//分享
		shareTest: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'shareTest', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},

		/* 获取手机声音系统音量，通话音量，铃声音量
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		getvoice: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'getvoice', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},

		/**
		 * 锁屏
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		lockScreen: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'lockScreen', {
					"params": str
				}
			);
		},
		/**
		 * 判断横竖屏
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		LandscapeOrPortrait: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'LandscapeOrPortrait', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},
		/**
		 * 获取总内存和可用内存
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		getMemory: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'getMemory', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},

		/**
		 * 获取电子签名方法
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		getElecSignPic: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'getElecSignPic', {
					"params": str
				},
				function(responseData) {
					console.log("123321>>" + responseData);
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},

		/**
		 * 打水印
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		makeMark: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.photoPath = params.photoPath.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'makeMark', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},

		//		/**
		//		 * 上传附件
		//		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		//		 */
		uploadFile: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.fileList = params.fileList.replace(/[\/]/g, '$');
				params.url = params.url.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'uploadFile', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},
		/**改变屏幕亮度**/
		changeScreenIntensity: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'changeScreenIntensity', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},

		/**
		 * 获取屏幕亮度
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		SystemBrightness: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'SystemBrightness', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},

		/**
		 * 判断横竖屏
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		LandscapeOrPortrait: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'LandscapeOrPortrait', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},

		/**
		 * 通讯录
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		addressBook: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'addressBook', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},
		/**

		       		/**
		               		 * 文件下载
		               		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		               		 */
		DownLoadFile: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.loadpath = params.loadpath.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'DownLoadFile', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},
		/**
		 * 定位
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		getLocationInfo: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'getLocationInfo', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},
		/**
		 * 获取文件大小
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		GetFileSize: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.savepath = params.savepath.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'GetFileSize', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},
		/**
		 * 删除文件
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		DeleteFile: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.filepath = params.filepath.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'DeleteFile', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},
		/**
		 * 中断文件下载
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		CancelDownLoad: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'CancelDownLoad', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},
		/**
		 * 停止文件下载
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		stopDownload: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'stopDownload', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},
		/**
		 * 获取getIntent
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		getIntent: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'getIntent', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},

		/**
		 * 显示加载框
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		showLoading: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'showLoading', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},
		/**
		 * 关闭加载框
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		cancelLoading: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'cancelLoading', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},
		/**
		 * 弹出数字软键盘
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		showkeyboard: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'showkeyboard', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**

 /**
 		 * 弹出吐司
 		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
 		 */
		showToase: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'showToase', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 * 弹出Dialog
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		showDialog: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'showDialog', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 * 获取基站信息
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		stationmessage: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'stationmessage', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},
		/**
		 * 设置sharepreferce
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		setSpference: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'setSpference', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},

		/**
		 * 获取sharepreferce
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		getSpference: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'getSpference', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 * 清除sharepreferce
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		clearSpference: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'clearSpference', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 * 文件选择
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		choosefile: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'choosefile', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},

		/**
		 *判断文件是否存在
		 *
		 */
		FileIsExists: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.filepath = params.filepath.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'FileIsExists', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},


		/**
		 * 获取外网ip
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		getnetip: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'getnetip', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},
		/**
		 * 获取网络状态
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		getCurrentNetType: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'getCurrentNetType', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},
		/**
		 * 获取手机设备信息
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		devicesmessage: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'devicesmessage', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},
		/**
		 * 获取手机屏幕像素信息
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		getDisplayMetrics: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'getDisplayMetrics', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},
		/**
		 * 获取app版本信息
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		getPackageInfo: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'getPackageInfo', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},

		/**
		 * 根据包名获取版本信息
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		getPackageInfobyname: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'getPackageInfobyname', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 * 根据包名打开apk
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		getopenappbyname: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'getopenappbyname', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 * 下载安装apk
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		openapkinstall: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.url = params.url.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'openapkinstall', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 * 卸载app
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		unloadApp: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'unloadApp', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *拨号
		 *
		 */
		telephoneCall: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'telephoneCall', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *获取通话记录
		 *
		 */
		getTelephoneMessage: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'getTelephoneMessage', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 * finishwebview
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		finishWebview: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'finishWebview', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},
		/**
		 * 解压
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		upZipFile: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.path = params.path.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'upZipFile', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},
		/**
		 * 压缩
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		zipFile: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.path = params.path.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'zipFile', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},
		/**
		 * 裁剪图片
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		CropRawPhoto: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.path = params.path.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'CropRawPhoto', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},
		/**
		 * 返回webView界面
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		BackWebview: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'BackWebview', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},
		/**
		 * 导航
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		Navigation: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'Navigation', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},
		/**
		 * 文字转经纬度
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		GeocodeSearchByName: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'GeocodeSearchByName', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData)
				}
			);
		},
		/**
		 * 获取手机号
		 * @param {Object} options : param(参数) callback（回调函数，返回data ）
		 */
		getLocalPhoneNumber: function(callback) {
			window.WebViewJavascriptBridge.callHandler(
				'getLocalPhoneNumber', {},
				function(responseData) {
					if (callback != null)
						callback(responseData);
				}
			);
		},
		/**
		 *安装apk
		 *
		 */
		installApk: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.apkPath = params.apkPath.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'installApk', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},


		/**
		 *获取手机唯一标识
		 *
		 */
		getUniqueID: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'getUniqueID', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *获取手机型号
		 *
		 */
		getPhoneType: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'getPhoneType', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *获取wifimac地址
		 *
		 */
		getWifiInfo: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'getWifiInfo', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *打开文件
		 *
		 */
		openFile: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.filePath = params.filePath.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'openFile', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *选择软件打开文件
		 *
		 */
		openFileBySelecting: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.filePath = params.filePath.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'openFileBySelecting', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *返回结果
		 *
		 */
		setResult: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {

				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'setResult', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *语音播报
		 *
		 */
		speedBroadcast: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {

				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'speedBroadcast', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *停止语音播报
		 *
		 */
		stopspeedBroadcast: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {

				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'stopspeedBroadcast', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *语音识别
		 *
		 */
		speechKnow: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {

				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'speechKnow', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *开始语音识别
		 *
		 */
		startSpeechKnow: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {

				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'startSpeechKnow', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *停止语音识别
		 *
		 */
		stopSpeechKnow: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {

				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'stopSpeechKnow', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *取消语音识别
		 *
		 */
		cancleSpeechKnow: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {

				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'cancleSpeechKnow', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *重新开启WebViewActivity
		 *
		 */
		openNewWebView: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.url = params.url.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'openNewWebView', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *结束WebViewActivity
		 *
		 */
		closeNewWebView: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'closeNewWebView', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *缓存GetCacheSize
		 *
		 */
		GetCacheSize: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'GetCacheSize', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},

		/**
		 *清除缓存
		 *
		 */
		ClearCache: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'ClearCache', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *是否有网
		 *
		 */
		isNetworkConnected: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'isNetworkConnected', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *实人认证
		 *
		 */
		zhimaCertify: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'zhimaCertify', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *注册摇一摇
		 *
		 */
		registerSensorShake: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'registerSensorShake', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *取消注册摇一摇
		 *
		 */
		ping: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'ping', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},


		unregisterSensorShake: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'unregisterSensorShake', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},

		getJpushRegistrationID: function(options) {

			window.WebViewJavascriptBridge.callHandler(
				'getJpushRegistrationID', {},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		getBuildVersion: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'getBuildVersion', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},

		/**
		 *创建文件
		 *
		 */
		createfile: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.filePath = params.filePath.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'createfile', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *创建文件夹
		 *
		 */
		createFolder: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.foldPath = params.foldPath.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'createFolder', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *判断文件夹是否存在
		 *
		 */
		dirIsExists: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.foldPath = params.foldPath.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'dirIsExists', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *文本文件写
		 *
		 */
		writeExternal: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.filePath = params.filePath.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'writeExternal', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *文本文件读
		 *
		 */
		readExternal: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.filePath = params.filePath.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'readExternal', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *
		 *获取文件夹所有文件名称
		 */
		getFilesAllName: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.foldPath = params.foldPath.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'getFilesAllName', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *
		 *删除文件夹
		 */
		deleteDir: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				params.foldPath = params.foldPath.replace(/[\/]/g, '$');
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'deleteDir', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *
		 *添加联系人
		 */
		addContact: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'addContact', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *
		 *获取所有联系人信息
		 */
		getAllContacts: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'getAllContacts', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *
		 *修改联系人
		 */
		updataCotact: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'updataCotact', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *
		 *删除联系人
		 */
		deleteContact: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'deleteContact', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *
		 *获取SIM卡信息
		 */
		getSimMessage: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'getSimMessage', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *
		 *获取系统短信
		 */
		getAllMessage: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'getAllMessage', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},

		/**
		 *
		 *拍照and相册
		 */
		pictakephoto: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'pictakephoto', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *
		 *响铃震动
		 */
		registerShakeOrRing: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'registerShakeOrRing', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
		/**
		 *
		 *停止响铃
		 */
		stopRing: function(options) {
			var params = options.params;
			var str = "";
			if (params != null) {
				str = typeof(params) == "object" ? JSON.stringify(params) : params + str;
			}
			window.WebViewJavascriptBridge.callHandler(
				'stopRing', {
					"params": str
				},
				function(responseData) {
					if (options.callback != null)
						options.callback(responseData);
				}
			);
		},
	}
	window.Mplat = mplat;
})()



function connectWebViewJavascriptBridge(callback) {
	if (window.WebViewJavascriptBridge) {
		callback(WebViewJavascriptBridge)
	} else {
		document.addEventListener(
			'WebViewJavascriptBridgeReady',
			function() {
				callback(WebViewJavascriptBridge)
			},
			false
		);
	}
}
