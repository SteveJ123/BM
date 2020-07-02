define(["require","exports","tslib","modules/clean/api_v2/user_client","modules/clean/react/browse/models","modules/core/i18n","modules/clean/react/snackbar","modules/clean/components/modals/show_modal","modules/clean/react/locked_files/view/modals/lock_confirm_modal","modules/clean/react/locked_files/view/modals/request_unlock_confirm_modal","modules/clean/filepath","modules/core/cookies"],(function(e,n,o,t,i,s,a,l,c,r,u,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),u=o.__importStar(u);function f(){return s.intl.formatMessage({id:"uGHYAs",defaultMessage:"Unlocked editing. Any one else with access can edit again."})}function m(){return s.intl.formatMessage({id:"v/COiN",defaultMessage:"Unlocking editing failed."})}function k(e){return{entries:e.map((function(e){return{path:e.fq_path}}))}}function _(e){return e.result.then((function(n){return n.entries&&n.entries.length>0&&n.entries.every((function(e){return"success"===e[".tag"]}))?(a.Snackbar.complete(e.onSuccessMsg(n),"file-lock-status"),Promise.resolve()):Promise.reject()})).catch((function(){return a.Snackbar.fail(e.onFailMsg,"file-lock-status"),Promise.reject()}))}function g(e,n){return o.__awaiter(this,void 0,void 0,(function(){var i;return o.__generator(this,(function(o){switch(o.label){case 0:return i=new t.UserApiV2Client,[4,_({result:i.ns("files").rpc("lock_file_batch",k(n),{subjectUserId:e}),onSuccessMsg:function(e){return s.intl.formatMessage({id:"nv3jy/",defaultMessage:"Editing locked. Now only you can make changes."})},onFailMsg:s.intl.formatMessage({id:"MmwXT2",defaultMessage:"Locking editing failed."})})];case 1:return o.sent(),[2]}}))}))}function h(e,n){return o.__awaiter(this,void 0,void 0,(function(){var a,l,c;return o.__generator(this,(function(o){switch(o.label){case 0:return a=i.File.getFilename(n[0]),l=n[0].lockholder_name,c=new t.UserApiV2Client,[4,_({result:c.ns("files").rpc("request_unlock_file_batch",k(n),{subjectUserId:e}),onSuccessMsg:function(e){var n=e.entries[0];return n.lock&&n.lock.content&&"unlocked"===n.lock.content[".tag"]?f():s.intl.formatMessage({id:"im3MR+",defaultMessage:"Asked {name} to unlock {filename}"},{filename:a,name:l})},onFailMsg:s.intl.formatMessage({id:"i/KiYl",defaultMessage:"Error asking {name} to unlock {filename}"},{filename:a,name:l})})];case 1:return o.sent(),[2]}}))}))}n.unlockSuccessString=f,n.unlockFailureString=m,n.showFeedbackForFileLockAction=_,n.asyncLockFile=g,n.asyncUnlockFile=function(e,n){return o.__awaiter(this,void 0,void 0,(function(){var i;return o.__generator(this,(function(o){switch(o.label){case 0:return i=new t.UserApiV2Client,[4,_({result:i.ns("files").rpc("unlock_file_batch",k(n),{subjectUserId:e}),onSuccessMsg:function(e){return f()},onFailMsg:m()})];case 1:return o.sent(),[2]}}))}))},n.asyncRequestUnlockFile=h,n.showFileLockConfirmModal=function(e,n){var o=function(){g(e,[n])};"true"===d.Cookies.read("do_not_show_lock_confirmation_dialog")?o():l.showModal(c.FileLockConfirmModal({filename:u.filename(n.fq_path),onLock:o,onNeverShowAgain:function(){d.Cookies.create("do_not_show_lock_confirmation_dialog","true",365)}}))},n.showRequestUnlockConfirmModal=function(e,n){void 0!==n.ts_locked&&void 0!==n.lockholder_name?l.showModal(r.RequestUnlockConfirmModal({lockCreatedTime:n.ts_locked,lockholderName:n.lockholder_name,onRequestUnlock:function(){h(e,[n])}})):a.Snackbar.fail(s.intl.formatMessage({id:"LDj5Eu",defaultMessage:"Could not ask to unlock. Please try again later."}),"file-lock-status")}}));
//# sourceMappingURL=api.min.js-vflOVWzbQ.map