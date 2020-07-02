define(["require","exports","tslib","modules/clean/react/file_transfers/lib/api","external/lodash","modules/core/cookies","modules/clean/display_format","modules/clean/downloads","modules/clean/react/file_transfers/redux/types","modules/clean/react/file_transfers/uploader/types","modules/clean/react/file_transfers/constants","modules/clean/filepath","modules/clean/uuid","modules/core/i18n","file-transfers/common/constants","file-transfers/common/types","modules/constants/time","modules/clean/datetime","modules/clean/react/file_transfers/lib/urls"],(function(e,t,r,n,a,i,o,s,l,u,c,f,d,m,_,g,p,S,h){"use strict";function E(e){var t=localStorage.getItem(e);return null===t?null:parseInt(t,10)}function T(e,t){localStorage.setItem(e,t.toString())}Object.defineProperty(t,"__esModule",{value:!0}),n=r.__importStar(n),s=r.__importStar(s),S=r.__importStar(S),t.contactToEmailRecipient=function(e){return{recipient:{".tag":"email_address",email_address:e.email}}},t.sortByCreationTimeDesc=function(e){return r.__spreadArrays(e).sort((function(e,t){return e.creation_time<t.creation_time?1:t.creation_time<e.creation_time?-1:0}))},t.formatBytes=function(e,t){return void 0===t&&(t={}),void 0===t.numDecimalPlaces&&(e<o.SWITCH_UNIT_THRESHOLD*_.BYTES_IN_KILOBYTE?t.numDecimalPlaces=0:e<o.SWITCH_UNIT_THRESHOLD*_.BYTES_IN_MEGABYTE?t.numDecimalPlaces=1:t.numDecimalPlaces=2),o.format_bytes(e,t.numDecimalPlaces,t.includeSpace,t.lazy,t.allowNegative)},t.hasValidEmail=function(e){return c.VALID_EMAIL_REGEX.test(e.email)},t.incrementLocalStorageValueForKey=function(e){var t=E(e);T(e,t?t+1:1)},t.getLocalStorageNumberValueForKey=E,t.getLocalStorageBooleanValueForKey=function(e){var t=localStorage.getItem(e);return null===t?null:"true"===t},t.setLocalStorageValueForKey=T,t.HAS_USER_AGREED_TO_LOGGED_OUT_TRANSFER_TOS_KEY="transfer_agreed_to_tos",t.hasUserAgreedToLoggedOutTransferTOS=function(){return!!i.Cookies.read(t.HAS_USER_AGREED_TO_LOGGED_OUT_TRANSFER_TOS_KEY)},t.markUserAgreedToLoggedOutTransferTOS=function(){i.Cookies.create(t.HAS_USER_AGREED_TO_LOGGED_OUT_TRANSFER_TOS_KEY,"true")},t.hasAtLeastOneFileDownloaded=function(e){return null!==sessionStorage.getItem("fileTransferAtLeastOneFileDownloaded:"+e)},t.markAtLeastOneFileDownloaded=function(e){sessionStorage.setItem("fileTransferAtLeastOneFileDownloaded:"+e,"true")};t.hasEverSetBackground=function(){return null!==localStorage.getItem("fileTransferEverSetBackground")},t.markHasEverSetBackground=function(){localStorage.setItem("fileTransferEverSetBackground","true")};function D(e,t,r){return 0===e.length?m.intl.formatMessage({id:"syJiNE",defaultMessage:"Transfer with no items"}):t<=1?m.intl.formatMessage({id:"8oHG0B",defaultMessage:"{item_name}"},{item_name:r?y(e[0]):e[0]}):m.intl.formatMessage({id:"IUBT/B",defaultMessage:"{item_name} + {item_count}"},{item_name:r?y(e[0]):e[0],item_count:t-1})}function y(e){var t=e;e.length>c.MAX_LEN_OF_FILE_NAME&&(t=e.slice(0,c.LEN_OF_FILE_NAME_PREFIX)+"..."+e.slice(e.length-c.LEN_OF_FILE_NAME_SUFFIX));return t}function F(e){return null===v(e)}function v(e){var t;if("dest"in e)t=e.dest;else if("fullPath"in e){if(!e.fullPath)return null;"/"===(t=e.fullPath).charAt(0)&&(t=e.fullPath.substring(1))}else{if(!("path"in e))throw new Error("file must be either PluploadFile, StateFileInfo, or FileSystemEntry");if(!e.path)return null;t=e.path}var r=t.split("/");return r.length<=1?null:r[0]}function A(e,t){void 0===t&&(t={});for(var r=document.getElementsByName("file-downloads-iframe"),n=0,a=Array.from(r);n<a.length;n++){var i=a[n];i&&i.parentNode&&i.parentNode.removeChild(i)}var o=document.createElement("iframe");o.name="file-downloads-iframe",o.src="about:blank",o.setAttribute("style","display: none;"),document.body.appendChild(o);var s=o.contentDocument,l=s.createElement("form");l.action=e,l.method="post",Object.keys(t).forEach((function(e){var r=document.createElement("input");r.type="hidden",r.name=e,r.value=t[e],l.appendChild(r)})),s.body.appendChild(l),l.submit()}function I(e,r){return Math.round((r.getTime()-e.getTime())/t.DAYS_IN_MS)}function L(e){return function(t){return(function(e){return e.value?e.value[".tag"]:"other"})(t)===e}}t.hasEverSetLogo=function(){return null!==localStorage.getItem("fileTransferHasEverSetLogo")},t.markHasEverSetLogo=function(){localStorage.setItem("fileTransferHasEverSetLogo","true")},t.generateTransferSummaryTitle=function(e,t){return e.title||D(e.summary_file_names,e.display_file_count,t)},t.generateTransferTitle=D,t.formatLongFileNameForDisplay=y,t.createDirectoryStateFileInfo=function(e,t){return{id:d.UUID.v4(),isDir:!0,path:e,size:0,source:t,thumbnailUrl:null}},t.transferFileAsStateFileInfo=function(e){return{id:e.transfer_file_id,isDir:e.obsolete_is_dir,path:e.relative_path,size:e.file_size,source:u.FileSource.Transfer,thumbnailUrl:e.thumbnail_url||null}},t.chooserFileAsStateFileInfo=function(e){return{id:e.id,isDir:e.isDir,path:e.name,size:e.bytes,source:u.FileSource.Dropbox,thumbnailUrl:null}},t.pluploadFileAsStateFileInfo=function(e){return{id:e.id,isDir:0===e.size,path:e.dest,size:e.size,source:u.FileSource.Computer,thumbnailUrl:null}},t.fileAsStateFileInfo=function(e){return{path:e.name,id:e.name,size:e.size||0,isDir:!1,source:u.FileSource.Computer,thumbnailUrl:null}},t.stateFileInfoAsFileInfo=function(e,t){return void 0===t&&(t={}),r.__assign({id:e.id,isDir:e.isDir,name:e.path,size:e.size,thumbnailUrl:e.thumbnailUrl},t)},t.sumBytes=function(e){return e.reduce((function(e,t){return e+t.size}),0)},t.fileSystemDirectoryEntryAsStateFileInfo=function(e){return{id:d.UUID.v4(),isDir:!0,path:e.fullPath?e.fullPath.substring(1):e.name,size:0,source:u.FileSource.Computer,thumbnailUrl:null}},t.isAtRoot=F,t.getRootDirectory=v,t.getTransferFilesKey=function(e){return e||c.NULL_FILE_TRANSFER_KEY},t.isLocalDirectory=function(e){return e.isDir&&e.source===u.FileSource.Computer},t.downloadZipFromUrl=A,t.downloadFiles=function(e,t,a){return r.__awaiter(this,void 0,Promise,(function(){var i;return r.__generator(this,(function(r){return(i=n.downloadFiles(t,e,a)).then((function(e){var t=e.post_params?JSON.parse(e.post_params):{},r=e.url.toString();0===Object.keys(t).length?s.get({url:r}):A(r,t)})),i.catch((function(e){})),[2,i]}))}))},t.renameDuplicateFiles=function(e,t){void 0===t&&(t=[]);var n=[],a=[],i=new Set,o=new Set;return t.filter((function(e){return F(e)})).forEach((function(e){i.add(e.id),o.add(e.path.toLowerCase())})),e.forEach((function(e){var t,s,l=f.split_filename(e.path);if(o.has(e.path.toLowerCase())){if(i.has(e.id))return;var u=1,c=void 0;do{c=l.name+" ("+u+")",t=l.ext?c+"."+l.ext:c,u++}while(o.has(t.toLowerCase()));i.add(e.id),o.add(t.toLowerCase()),s=r.__assign(r.__assign({},e),{path:t}),n.push(s)}else F(e)?(i.add(e.id),o.add(e.path.toLowerCase()),s=r.__assign({},e)):s=r.__assign({},e);a.push(s)})),{files:a,filesRenamed:n}},t.DAYS_IN_MS=864e5,t.getDateDiff=I,t.estimateExpirationOption=function(e,t){var r=I(new Date(e.getFullYear(),e.getMonth(),e.getDate()),new Date(t.getFullYear(),t.getMonth(),t.getDate()));switch(r){case g.ExpirationOption.THREE_DAYS:case g.ExpirationOption.SEVEN_DAYS:case g.ExpirationOption.THIRTY_DAYS:case g.ExpirationOption.NINETY_DAYS:return r;default:return g.ExpirationOption.CUSTOM}},t.getUpsellProps=function(e,t){var r={};switch(e){case l.UpsellVariant.TRY_PROFESSIONAL:r={productName:"Professional",ctaCopy:m.intl.formatMessage({id:"u5yymK",defaultMessage:"Try Professional free"}),ctaLink:"/pro/try"};break;case l.UpsellVariant.BUY_PROFESSIONAL:r={productName:"Professional",ctaCopy:m.intl.formatMessage({id:"LD5aLl",defaultMessage:"Buy Professional"}),ctaLink:"/buy/professional"};break;case l.UpsellVariant.TRY_PLUS:r={productName:"Plus",ctaCopy:m.intl.formatMessage({id:"P2OofN",defaultMessage:"Try Plus"}),ctaLink:"/plus/try"};break;case l.UpsellVariant.TRY_BUSINESS_ADVANCED:r={productName:"Advanced",ctaCopy:m.intl.formatMessage({id:"THe8DF",defaultMessage:"Try Business Advanced free"}),ctaLink:"/business/try"};break;case l.UpsellVariant.CONTACT_ADMIN:r={productName:"Advanced",ctaCopy:m.intl.formatMessage({id:"ZRJQ83",defaultMessage:"Contact admin"}),ctaLink:"/team#members"}}return t&&(r.ctaLink=h.addTrackingParams(r.ctaLink,{},t)),r};var O=L("image"),U=L("video");function N(e){return!!e.asset&&O(e.asset)}function b(e){return!!e.asset&&U(e.asset)}function C(e,t){return t?a.filter(t,(function(t){return t.status===e})).length:0}t.isColorBackground=function(e){return!!e.color_hex&&!e.asset},t.isImageBackground=N,t.isVideoBackground=b,t.getImageBackgroundAsset=function(e){return N(e)?e.asset.value:null},t.getVideoBackgroundAsset=function(e){return b(e)?e.asset.value:null},t.generateTransferTrackingId=function(){return d.UUID.v4()},t.numWaiting=function(e){return C(u.UploadStatus.Waiting,e)},t.numSuccess=function(e){return C(u.UploadStatus.Success,e)},t.getChildrenFiles=function(e,t){if(!e.isDir)throw Error("Can only get children of a directory");return t.filter((function(t){return t.path!==e.path&&t.path.startsWith(e.path+"/")}))},t.areItemsUploaded=function(e,t){return e.every((function(e){return t[e.id]&&t[e.id].status===u.UploadStatus.Success}))},t.computeCreationRelativeExpirationDate=function(e,t){var r=function(e){return Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())},n=r(t)-r(e);return new Date(+e+n)},t.formatDate=function(e){return S.format_date(e,p.DATE_FORMAT).replace(/-/gi,"/")}}));
//# sourceMappingURL=utils.min.js-vflGlBl1O.map