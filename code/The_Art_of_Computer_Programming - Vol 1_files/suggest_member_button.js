define(["require","exports","tslib","react","spectrum/button","modules/clean/viewer","modules/clean/analytics","modules/core/i18n"],(function(e,t,n,l,a,i,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),l=n.__importDefault(l);var r=i.Viewer.get_viewer();t.SuggestMemberButton=function(){var t=l.default.useState({}),i=t[0],u=i.modal,d=i.suggestInvitesModal,c=t[1];return l.default.useEffect((function(){(function(){n.__awaiter(this,void 0,void 0,(function(){var t,l,a;return n.__generator(this,(function(i){switch(i.label){case 0:return[4,Promise.all([new Promise((function(t,n){e(["modules/clean/react/modal"],t,n)})).then(n.__importStar),new Promise((function(t,n){e(["modules/clean/teams/suggest_invites_modal"],t,n)})).then(n.__importStar)])];case 1:return t=i.sent(),l=t[0].Modal,a=t[1].SuggestInvitesModal,c({modal:l,suggestInvitesModal:a}),[2]}}))}))})()}),[]),u&&d?l.default.createElement(a.Button,{"data-testid":"suggest_member_button",onClick:function(){return(function(e,t){s.TeamsWebActionsLogger.log("clicked_invite_members_cta",{source:"sidebar"},null,null,!1,s.TeamsWebActionsLogger.LOG_CATEGORY.TEAM_INFO),e.showInstance(l.default.createElement(t,{teamId:r.team_id,teamType:r.team_type,source:"sidebar"}))})(u,d)},variant:"secondary",style:{margin:"5px 0 5px -10px"}},l.default.createElement("svg",{width:"18",height:"15",viewBox:"0 0 18 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 3H0V5H3V8H5V5H8V3H5V0H3V3Z",fill:"#99C6F3"}),l.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.29988 15H5.39988C4.89988 15 4.69988 14.7 4.89988 14.2L5.39988 12.8C5.79988 11.7 6.99988 10.9 8.19988 10.9H10.3999C11.4999 10.9 12.7999 11.8 13.1999 12.8L13.6999 14.2C13.8999 14.6 13.5999 15 13.1999 15H9.29988ZM9.29988 10C8.76945 10 8.26074 9.78929 7.88567 9.41421C7.5106 9.03914 7.29988 8.53043 7.29988 8C7.29988 7.46957 7.5106 6.96086 7.88567 6.58579C8.26074 6.21071 8.76945 6 9.29988 6C9.83032 6 10.339 6.21071 10.7141 6.58579C11.0892 6.96086 11.2999 7.46957 11.2999 8C11.2999 8.53043 11.0892 9.03914 10.7141 9.41421C10.339 9.78929 9.83032 10 9.29988 10ZM14.1999 10.9C13.2999 10.9 12.5999 10.2 12.5999 9.3C12.5999 8.4 13.2999 7.7 14.1999 7.7C15.0999 7.7 15.7999 8.4 15.7999 9.3C15.7999 10.2 15.0999 10.9 14.1999 10.9ZM13.4999 12.1C13.3999 11.9 13.5999 11.7 13.7999 11.7H14.9999C15.8999 11.7 16.8999 12.4 17.1999 13.2L17.4999 14.2C17.5999 14.6 17.3999 15 16.8999 15H14.9999C14.7999 15 14.4999 14.8 14.4999 14.6L13.4999 12.1Z",fill:"#0070E0"})),"  ",o.intl.formatMessage({id:"WWKHJZ",defaultMessage:"Suggest Members"})):null}}));
//# sourceMappingURL=suggest_member_button.min.js-vflXuc2iO.map