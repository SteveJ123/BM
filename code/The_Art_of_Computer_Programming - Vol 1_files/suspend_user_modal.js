define(["require","exports","tslib","react","spectrum/button","spectrum/modal","modules/clean/ajax","modules/clean/components/modals/show_modal","modules/clean/react/css","modules/clean/static_urls","modules/clean/teams/modals/member_info_modal_header","modules/core/i18n","modules/core/notify","modules/clean/viewer","modules/clean/ux_analytics_utils","modules/clean/ux_analytics_modal_tracking"],(function(e,t,a,n,s,i,l,o,r,d,u,c,m,p,f,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=a.__importDefault(n),l=a.__importStar(l);var g=(function(e){function t(t){var a=e.call(this,t)||this;return a.onSubmit=function(){a.setState({submitting:!0}),l.WebRequest({url:"/account/team/suspend_user",data:{user_id:a.props.userId,account_id:a.props.accountId,delete_on_unlink:a.state.deleteOnUnlink},teamAuthParams:a.props.teamAuthParams,subject_user:p.Viewer.get_viewer().work_user,complete:function(){return a.setState({submitting:!1})},success:function(e){a.close();var t=c.intl.formatMessage({id:"uFfyDv",defaultMessage:"Suspended {name}"},{name:a.displayName});a.props.successCallback("suspended",t,null,null,null)},error:function(e,t,a){m.Notify.error(c.intl.formatMessage({id:"HPL0VF",defaultMessage:"There was a problem completing this request"}))}})},a.close=function(e){void 0===e&&(e=!1),a.props.onClose&&a.props.onClose(e),a.setState({open:!1}),f.dispatchModalClosed()},a.onReady=function(){f.dispatchModalOpened()},a.onDeleteOnUnlinkChange=function(e){a.setState({deleteOnUnlink:e.currentTarget.value})},a.primaryAction=function(e){return n.default.createElement("span",null,a.state.submitting&&n.default.createElement("span",{className:"dbmodal-loading",key:"loading"},n.default.createElement("img",{src:d.static_url("/static/images/icons/ajax-loading-small-vfl3Wt7C_.gif"),alt:c.intl.formatMessage({id:"jybGUg",defaultMessage:"Loading"})})),n.default.createElement(s.Button,{disabled:a.state.submitting,variant:"primary",onClick:e},c.intl.formatMessage({id:"skJH+1",defaultMessage:"Suspend"})))},a.secondaryAction=function(e){return n.default.createElement(s.Button,{disabled:a.state.submitting,variant:"secondary",onClick:e},c.intl.formatMessage({id:"d9/SE1",defaultMessage:"Cancel"}))},a.state={deleteOnUnlink:t.hideRemoteWipe?void 0:"on",submitting:!1,open:!0},a}return a.__extends(t,e),t.prototype.render=function(){var e=this,t=c.intl.formatMessage({id:"ksdkTA",defaultMessage:"Suspend {display_name}"},{display_name:this.displayName}),a=c.intl.formatMessage({id:"EjsYag",defaultMessage:"This member will be notified that their account has been suspended and their devices will stop syncing. The account will continue to use a license and you can remove the suspension or delete the account at any time."});return n.default.createElement(i.UtilityModal,{className:"suspend-user-modal",overlayClassName:"delete-user-modal-overlay",title:t,width:"698px",primaryAction:this.primaryAction,secondaryAction:this.secondaryAction,onPrimaryAction:this.onSubmit,onSecondaryAction:function(){return e.close(!0)},onReady:this.onReady,onRequestClose:this.close,overlayClickClose:!1,ariaLabel:c.intl.formatMessage({id:"6wKAib",defaultMessage:"Suspend Member"}),open:this.state.open,shouldRequestCloseOnActions:!1},n.default.createElement(h.UXAnalyticsModalTracking,{id:"suspend-user-modal"}),this.renderMemberInfoHeader(),this.renderRemoteWipeSetting(),n.default.createElement("div",{className:"suspend_user_content"},a))},t.prototype.renderMemberInfoHeader=function(){return n.default.createElement(u.MemberInfoModalHeader,{displayName:this.props.displayName,email:this.props.email,storageUsed:this.props.storageUsed,accountPhotoUrl:this.props.accountPhotoUrl,teamJoinDate:this.props.teamJoinDate})},t.prototype.renderRemoteWipeSetting=function(){if(this.props.hideRemoteWipe)return null;var e=c.intl.formatMessage({id:"NLObc3",defaultMessage:"Do you want to delete content from this member’s devices the next time they come online?"});return n.default.createElement("div",{className:"remote_wipe_setting"},n.default.createElement("div",{className:"verbal_setting_explanation"},e),n.default.createElement("div",{className:"deactivate_or_remove_setting_option"},n.default.createElement("label",null,n.default.createElement("input",{name:"delete_on_unlink",type:"radio",value:"on",checked:"on"===this.state.deleteOnUnlink,"aria-checked":"on"===this.state.deleteOnUnlink,"aria-label":"Yes",onChange:this.onDeleteOnUnlinkChange}),c.intl.formatMessage({id:"U5fgWD",defaultMessage:"Yes"}))),n.default.createElement("div",{className:"deactivate_or_remove_setting_option"},n.default.createElement("label",null,n.default.createElement("input",{name:"delete_on_unlink",type:"radio",value:"off",checked:"off"===this.state.deleteOnUnlink,"aria-checked":"off"===this.state.deleteOnUnlink,"aria-label":"No",onChange:this.onDeleteOnUnlinkChange}),c.intl.formatMessage({id:"gWxS/S",defaultMessage:"No"}))))},Object.defineProperty(t.prototype,"displayName",{get:function(){return this.props.displayName||this.props.email},enumerable:!0,configurable:!0}),t})(n.default.Component);t.SuspendUserModal=r.requireCssWithComponent(g,["/static/css/spectrum/index.web-vflTq87Ea.css","/static/css/teams/admin_team_modals-vflzyAU0s.css"]),t.showSuspendUserModal=function(e){return o.showModal(n.default.createElement(t.SuspendUserModal,a.__assign({},e)))}}));
//# sourceMappingURL=suspend_user_modal.min.js-vflj7Nnji.map