define(["require","exports","tslib","react","modules/core/i18n","modules/clean/viewer","dig-components/buttons","dig-components/modal","dig-components/typography","dig-components/text_fields","modules/clean/api_v2/default_team_client","modules/clean/react/css"],(function(e,t,a,n,r,o,l,s,u,i,d,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=a.__importStar(n),t.createGroup=function(e,t){return void 0===t&&(t={".tag":"user_managed"}),a.__awaiter(void 0,void 0,void 0,(function(){return a.__generator(this,(function(a){switch(a.label){case 0:return[4,new d.DefaultTeamApiV2Client(o.Viewer.get_viewer().work_user).ns("team").rpc("groups/create",{group_name:e,group_management_type:t,add_creator_as_owner:!0},{})];case 1:return[2,a.sent()]}}))}))},t.CreateGroupModal=c.requireCssWithComponent((function(e){var a=e.open,o=e.handleOnClose,d=n.useState(),c=d[0],m=d[1],g=n.useState(),f=g[0],p=g[1],_=function(){return c&&t.createGroup(c).then(o).catch((function(){return p(r.intl.formatMessage({id:"8nZWnh",defaultMessage:"Enter a valid group name"}))}))};return n.default.createElement(s.Modal,{open:a,className:"create-group-modal",overlayClassName:"create-group-modal__overlay",width:"small",withCloseButton:r.intl.formatMessage({id:"lNU//O",defaultMessage:"Close Modal"}),onRequestClose:function(){return o()}},n.default.createElement(s.Modal.Header,{hasBottomSpacing:"title-standard"},n.default.createElement(u.Title,null,r.intl.formatMessage({id:"FuFuIt",defaultMessage:"Create New Group"}))),n.default.createElement(s.Modal.Body,null,n.default.createElement(u.Text,{isBold:!0},r.intl.formatMessage({id:"Nym01x",defaultMessage:"Name your group"})),n.default.createElement(i.TextInput,{autoFocus:!0,placeholder:r.intl.formatMessage({id:"38o/9Q",defaultMessage:"Marketing, Finance, Design, etc."}),value:c,onChange:function(e){return m(e.currentTarget.value)},onKeyDown:function(e){return"Enter"===e.key&&_()}}),f&&n.default.createElement(u.Text,{tagName:"p",color:"error"},f),n.default.createElement(u.Text,{tagName:"p"},r.intl.formatMessage({id:"VRIKXC",defaultMessage:"Only you can add members to this group"}))),n.default.createElement(s.Modal.Footer,null,n.default.createElement(l.Button,{variant:"outline",onClick:function(){return o()}},r.intl.formatMessage({id:"d9/SE1",defaultMessage:"Cancel"})),n.default.createElement(l.Button,{variant:"primary",onClick:_,disabled:!c},r.intl.formatMessage({id:"WgscFw",defaultMessage:"Create group"}))))}),["/static/css/dig-components/index.web-vflVqzbR_.css","/static/css/teams/admin/widgets/groups/create_group_modal-vflSSgBks.css"])}));
//# sourceMappingURL=create_group_modal.min.js-vflSY7qKo.map