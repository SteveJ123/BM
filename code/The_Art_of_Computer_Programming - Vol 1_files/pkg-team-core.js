define("modules/clean/teams/tabs",["require","exports","tslib","classnames","external/lodash","react","modules/core/browser","modules/clean/event_handler","modules/clean/react/css","modules/clean/react/maestro/components/tab_nav","modules/clean/react/tabs/tab_util","modules/clean/react/tabs/tabs"],(function(e,t,a,s,r,o,n,i,l,d,p,m){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s=a.__importDefault(s),r=a.__importStar(r),o=a.__importDefault(o),n=a.__importStar(n);var u=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={selectedIndex:0,idPrefix:t.props.idPrefix||"tabset"+r.uniqueId(),tabs:[]},t._onChange=function(e,a){t.setState({selectedIndex:a});var s=t.state.tabs[a];s.hashURL&&n.set_hash(s.hashURL),t.props.onChange&&t.props.onChange(e,a)},t}return a.__extends(t,e),t.prototype.UNSAFE_componentWillMount=function(){var e=this.props.children,t=this.state,a=t.selectedIndex,s=t.idPrefix,n=[];e&&o.default.Children.forEach(e,(function(e,t){var o=p.getTabContentId(s,t),i=e.props,l=i.title,d=i.hashPrefix,m=i.hashURL,u=i.rightAlign,c=i.isSelected;n.push({label:l,contentId:o,hashPrefix:d,hashURL:m,rightAlign:u,value:r.uniqueId()}),c&&(a=t)})),this.setState({tabs:n,selectedIndex:a})},t.prototype.componentDidMount=function(){this.events.on(window,"hashchange",this._selectTabFromHash,this),this._selectTabFromHash()},t.prototype.UNSAFE_componentWillReceiveProps=function(e){null!=e.selectedIndex&&e.selectedIndex!==this.state.selectedIndex&&this.setState({selectedIndex:e.selectedIndex})},t.prototype._selectTabFromHash=function(){var e=n.get_hash();if(e)for(var t=this.state.tabs,a=0;a<t.length;a++){var s=t[a],r=s.hashPrefix,o=s.hashURL;if(r&&e&&e.startsWith(r)||e===o){this.setState({selectedIndex:a});break}}else this.setState({selectedIndex:0})},t.prototype.render=function(){var e,t=this.props,a=t.variant,r=t.className,n=t.children,i=this.state,l=i.tabs,m=i.idPrefix,u=i.selectedIndex;return n&&(e=o.default.Children.map(n,(function(e,t){return o.default.cloneElement(e,{isSelected:t===u,id:p.getTabContentId(m,t),tabId:p.getTabId(m,t)})}))),o.default.createElement("div",{className:s.default("maestro-tab-nav",r,a)},o.default.createElement(d.FixedTabBar,{tabs:l,onChange:this._onChange,idPrefix:m,selectedIndex:u}),e)},t.defaultProps={variant:p.TabVariant.DEFAULT},t=a.__decorate([i.eventHandler],t)})(o.default.Component),c=l.requireCssWithComponent(u,["/static/css/legacy_packages/components-vflL6NIoo.css"]);t.Tabs=c,t.TabContent=m.TabContent})),define("modules/clean/teams/team_maestro_page_base",["require","exports","tslib","react","modules/clean/react/tabs/tab_util","modules/core/i18n","modules/clean/viewer","modules/clean/react/maestro/layout/header","modules/clean/teams/tabs","modules/clean/teams/admin/maestro/admin_console_actions_view","modules/clean/components/loading_indicator","modules/core/browser","modules/clean/react/maestro/layout/chrome","modules/clean/react/sprite","classnames","modules/clean/web_timing_logger","modules/clean/deferred_loader","modules/core/notify"],(function(e,t,a,s,r,o,n,i,l,d,p,m,u,c,h,f,g,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s=a.__importDefault(s),m=a.__importStar(m),h=a.__importDefault(h),f=a.__importStar(f);var M=(function(t){function M(s){var r=t.call(this,s)||this;return r.myGroups=[],r.teamGroups=[],r.requireTeamPage=function(){new Promise((function(t,a){e(["modules/clean/teams/team_page"],t,a)})).then(a.__importStar).then((function(e){return r.setState({teamPageElement:e.TeamPage})}))},r.requireGroupsPage=function(){new Promise((function(t,a){e(["modules/clean/groups/groups_page"],t,a)})).then(a.__importStar).then((function(e){var t=e.default;return r.setState({groupsPageElement:t})}))},r._setSingleGroupInfo=function(e){r.setState({activeGroup:e})},r.state={activeGroup:null,teamPageElement:s.initTeamPageElement,groupsPageElement:s.initGroupsPageElement,initialDataLoading:!0},r._setupDataPrefetchCallbacks(),r}return a.__extends(M,t),M.prototype._setupDataPrefetchCallbacks=function(){this._setupMembersPrefetchCallbacks(),this._setupGroupsPrefetchCallbacks()},M.prototype._setupMembersPrefetchCallbacks=function(){var e=this;if(window.__REGISTER_TEAM_MEMBERS_PRELOAD_HANDLER){window.__REGISTER_TEAM_MEMBERS_PRELOAD_HANDLER((function(t){try{var a=JSON.parse(t);f.log_js_modules_fetched_data_required_for_tti(),e.initTeamMembersDataDict={rows:a.members,total:a.total_members,numJoinRequests:a.num_join_requests},e.setState({initialDataLoading:!1})}catch(e){_.Notify.error(o.intl.formatMessage({id:"KO4W4A",defaultMessage:"An error occured. Please reload the page."}))}}),(function(){return _.Notify.error(o.intl.formatMessage({id:"KO4W4A",defaultMessage:"An error occured. Please reload the page."}))}))}},M.prototype._setupGroupsPrefetchCallbacks=function(){var e,t,a=this;window.__REGISTER_MY_GROUPS_PRELOAD_HANDLER&&(t=function(e){try{var t=JSON.parse(e);a.myGroups=t.groups,a.myGroupsTotal=t.total_groups,a._checkAndMarkGroupsDataFetchComplete()}catch(e){_.Notify.error(o.intl.formatMessage({id:"KO4W4A",defaultMessage:"An error occured. Please reload the page."}))}},e=function(){return _.Notify.error(o.intl.formatMessage({id:"KO4W4A",defaultMessage:"An error occured. Please reload the page."}))},window.__REGISTER_MY_GROUPS_PRELOAD_HANDLER(t,e)),window.__REGISTER_TEAM_GROUPS_PRELOAD_HANDLER&&(t=function(e){try{var t=JSON.parse(e);a.teamGroups=t.groups,a.teamGroupsTotal=t.total_groups,a._checkAndMarkGroupsDataFetchComplete()}catch(e){_.Notify.error(o.intl.formatMessage({id:"KO4W4A",defaultMessage:"An error occured. Please reload the page."}))}},e=function(){return _.Notify.error(o.intl.formatMessage({id:"KO4W4A",defaultMessage:"An error occured. Please reload the page."}))},window.__REGISTER_TEAM_GROUPS_PRELOAD_HANDLER(t,e))},M.prototype._checkAndMarkGroupsDataFetchComplete=function(){void 0!==this.myGroupsTotal&&void 0!==this.teamGroupsTotal&&(f.log_js_modules_fetched_data_required_for_tti(),this.initMyGroupsDataDict={rows:this.myGroups,total:this.myGroupsTotal},this.initTeamGroupsDataDict={rows:this.teamGroups,total:this.teamGroupsTotal},this.setState({initialDataLoading:!1}))},M.prototype.componentWillMount=function(){f.log_js_modules_application_code_start()},M.prototype.componentDidMount=function(){var t=this;f.waitForTTI().then((function(){t.props.mergedMembersAndGroups?t.requireGroupsPage():t.requireTeamPage(),Promise.all([new Promise((function(t,a){e(["modules/clean/groups/switch_to_member_managed_group_modal"],t,a)})).then(a.__importStar),new Promise((function(t,a){e(["modules/clean/teams/modals/create_group_modal"],t,a)})).then(a.__importStar),new Promise((function(t,a){e(["modules/clean/teams/modals/leave_team_modal"],t,a)})).then(a.__importStar),new Promise((function(t,a){e(["modules/clean/react/modal"],t,a)})).then(a.__importStar),new Promise((function(t,a){e(["modules/clean/teams/modals/delete_group_modal"],t,a)})).then(a.__importStar),new Promise((function(t,a){e(["modules/clean/teams/modals/remove_user_from_group_modal"],t,a)})).then(a.__importStar),new Promise((function(t,a){e(["modules/clean/teams/modals/sole_admin_warning_modal"],t,a)})).then(a.__importStar),new Promise((function(t,a){e(["modules/clean/teams/modals/make_company_managed_modal"],t,a)})).then(a.__importStar)]).then((function(e){var t=e[0].default,a=e[1].showCreateGroupModal,s=e[2].showLeaveLimitedTeamModal,r=e[3].Modal,o=e[4].showDeleteGroupModal,n=e[5].showRemoveUserFromGroupModal,i=e[6].showSoleAdminWarningModal,l=e[7].showMakeCompanyManagedModal;g.deferredLoader.setItems({SwitchToMemberManagedGroupModal:t,showCreateGroupModal:a,showDeleteGroupModal:o,showRemoveUserFromGroupModal:n,ShowLeaveLimitedTeamModal:s,Modal:r,showSoleAdminWarningModal:i,showMakeCompanyManagedModal:l})}))}))},M.prototype._renderGroupsTab=function(){var e=this.initMyGroupsDataDict,t=this.initTeamGroupsDataDict;return this.initMyGroupsDataDict=void 0,this.initTeamGroupsDataDict=void 0,this.state.groupsPageElement?s.default.createElement(this.state.groupsPageElement,{ref:"groupsTab",isMaestroDesign:!0,canHaveAdminUi:this.props.canHaveAdminUi,groupControlledByAdmin:this.props.groupControlledByAdmin,teamName:this.props.viewer.team_name,isLimitedTeam:this.props.isLimitedTeam,insideAdminConsole:!1,onNewSingleGroup:this._setSingleGroupInfo,infiniteScroll:this.props.infiniteScroll,mergedMembersAndGroups:this.props.mergedMembersAndGroups,initialMyGroupsDataDict:e,initialTeamGroupsDataDict:t}):null},M.prototype._renderMembersTab=function(){var e=this.initTeamMembersDataDict;return this.initTeamMembersDataDict=void 0,this.state.teamPageElement?s.default.createElement(this.state.teamPageElement,{ref:"membersTab",isMaestroDesign:!0,teamName:this.props.viewer.team_name,teamFolderPathName:this.props.teamFolderPathName,members:this.props.members,teamIsAssumed:this.props.teamIsAssumed,totalMembers:this.props.totalMembers,totalActiveMembers:this.props.totalActiveMembers,totalRows:this.props.totalRows,numJoinRequests:this.props.numJoinRequests,numProvisionedLicenses:this.props.numProvisionedLicenses,isLimitedTeam:this.props.isLimitedTeam,canInviteMembers:this.props.canInviteMembers,canManageTeamMembership:this.props.canManageTeamMembership,canSuggestMembers:this.props.canSuggestMembers,canAccessAdminConsole:this.props.canAccessAdminConsole,canHaveAdminUi:this.props.canHaveAdminUi,canHaveLimitedAdminSettings:this.props.canHaveLimitedAdminSettings,canManageLimitedAdmins:this.props.canManageLimitedAdmins,viewerIsSoleAdmin:this.props.viewerIsSoleAdmin,infiniteScroll:this.props.infiniteScroll,inviteMemberEmails:this.props.inviteMemberEmails,mergedMembersAndGroups:this.props.mergedMembersAndGroups,openInviteModal:this.props.openInviteModal,openSuggestMembersModal:this.props.openSuggestMembersModal,openUploadModal:this.props.openUploadModal,onboardingModalVariant:this.props.onboardingModalVariant,adminOnboardingState:this.props.adminOnboardingState,teamMembersLimit:this.props.teamMembersLimit,enableMaxSizeExperiment:this.props.enableMaxSizeExperiment,showQuota:this.props.showQuota,teamIsCdm:this.props.teamIsCdm,initialDataDict:e}):null},M.prototype._refreshMembersAndGroupsPage=function(){this.props.mergedMembersAndGroups&&this.refs.membersTab.forceRefresh()},M.prototype._manageMembersClicked=function(){m.redirect("/team/admin/members")},M.prototype._manageGroupsClicked=function(){m.redirect("/team/admin/groups")},M.prototype._inviteMembersClicked=function(){this.refs.membersTab.onInviteClicked()},M.prototype._suggestMembersClicked=function(){this.refs.membersTab.onSuggestMembersClicked()},M.prototype._createGroupClicked=function(){var e=this;g.deferredLoader.getResolvedItems(["showCreateGroupModal"]).then((function(t){return(0,t.showCreateGroupModal)({isLimitedTeam:e.props.isLimitedTeam,canHaveAdminUi:e.props.canHaveAdminUi,success:function(t){var a;a="groups/"+(t=JSON.parse(t)).data.id,m.set_hash(a),e._refreshMembersAndGroupsPage()}})}))},M.prototype._renameGroupClicked=function(){this.refs.groupsTab.showRenameGroupModal()},M.prototype._deleteGroupClicked=function(){var e=this;g.deferredLoader.getResolvedItems(["showDeleteGroupModal"]).then((function(t){return(0,t.showDeleteGroupModal)({groupId:e.state.activeGroup.id,groupName:e.state.activeGroup.name,onPrimaryAction:function(){m.set_hash(e.props.mergedMembersAndGroups?"members":"groups"),e._refreshMembersAndGroupsPage()}})}))},M.prototype._leaveGroupClicked=function(){var e=this;g.deferredLoader.getResolvedItems(["showRemoveUserFromGroupModal"]).then((function(t){return(0,t.showRemoveUserFromGroupModal)({groupId:e.state.activeGroup.id,groupName:e.state.activeGroup.name,userId:n.Viewer.get_viewer().work_user.id,userDisplayName:n.Viewer.get_viewer().work_user.display_name,removeSelf:!0,onPrimaryAction:function(){m.set_hash(e.props.mergedMembersAndGroups?"members":"groups"),e._refreshMembersAndGroupsPage()}})}))},M.prototype._makeGroupCompanyManagedClicked=function(){var e=this;g.deferredLoader.getResolvedItems(["showMakeCompanyManagedModal"]).then((function(t){return(0,t.showMakeCompanyManagedModal)({groupId:e.state.activeGroup.id,groupName:e.state.activeGroup.name,success:function(){e.refs.groupsTab.refreshGroup()}})}))},M.prototype._makeGroupUserManagedClicked=function(){var e=this;g.deferredLoader.getResolvedItems(["SwitchToMemberManagedGroupModal","Modal"]).then((function(t){var a=t.SwitchToMemberManagedGroupModal;t.Modal.showInstance(s.default.createElement(a,{group:e.state.activeGroup,onMemberManaged:e.refs.groupsTab.refreshGroup,insideAdminConsole:!1}))}))},M.prototype._leaveTeamClicked=function(){var e=this;g.deferredLoader.getResolvedItems(["ShowLeaveLimitedTeamModal","showSoleAdminWarningModal"]).then((function(t){var a=t.ShowLeaveLimitedTeamModal,s=t.showSoleAdminWarningModal;if(!e.props.showWarningOnLeaveTeam)return a({userId:e.props.viewer.work_user.id,teamName:e.props.viewer.team_name,canHaveAdminUi:e.props.canHaveAdminUi,success:function(){return m.redirect("/team")}});s({teamName:e.props.viewer.team_name,action:"leave"})}))},M.prototype._addGroupMembersClicked=function(){this.refs.groupsTab.showAddMembersModal()},M.prototype._renderSidebar=function(){return this.state.activeGroup?this._renderSidebarGroupView():this._renderSidebarMainView()},M.prototype._renderSidebarMainView=function(){var e,t=this,a=[],r=this.props.mergedMembersAndGroups;return this.props.isLimitedTeam?(r?(e={displayName:o.intl.formatMessage({id:"ow64Ns",defaultMessage:"Invite members"}),handleClick:function(){return t._inviteMembersClicked()}},a.push({displayName:o.intl.formatMessage({id:"WgscFw",defaultMessage:"Create group"}),iconName:"restore-user",handleClick:function(){return t._createGroupClicked()},disabled:!1})):(e={displayName:o.intl.formatMessage({id:"WgscFw",defaultMessage:"Create group"}),handleClick:function(){return t._createGroupClicked()}},a.push({displayName:o.intl.formatMessage({id:"ow64Ns",defaultMessage:"Invite members"}),iconName:"add-user-to-group",handleClick:function(){return t._inviteMembersClicked()},disabled:!1})),a.push({displayName:o.intl.formatMessage({id:"tEX5tu",defaultMessage:"Leave team"}),iconName:"leave-group",handleClick:function(){return t._leaveTeamClicked()},disabled:!1})):r?(e=this.props.canAccessAdminConsole?{displayName:o.intl.formatMessage({id:"AzElDC",defaultMessage:"Manage members"}),handleClick:function(){return t._manageMembersClicked()}}:this.props.canSuggestMembers?{displayName:o.intl.formatMessage({id:"FsLrBD",defaultMessage:"Suggest members"}),handleClick:function(){return t._suggestMembersClicked()}}:{displayName:o.intl.formatMessage({id:"ow64Ns",defaultMessage:"Invite members"}),disabled:!0},a.push({displayName:o.intl.formatMessage({id:"WgscFw",defaultMessage:"Create group"}),iconName:"restore-user",handleClick:function(){return t._createGroupClicked()},disabled:!this.props.canHaveAdminUi&&this.props.groupControlledByAdmin})):this.props.canAccessAdminConsole?(e={displayName:o.intl.formatMessage({id:"bfob0z",defaultMessage:"Manage groups"}),handleClick:function(){return t._manageGroupsClicked()}},a.push({displayName:o.intl.formatMessage({id:"AzElDC",defaultMessage:"Manage members"}),iconName:"add-user-to-group",handleClick:function(){return t._manageMembersClicked()},disabled:!1})):(e={displayName:o.intl.formatMessage({id:"WgscFw",defaultMessage:"Create group"}),handleClick:function(){return t._createGroupClicked()},disabled:this.props.groupControlledByAdmin},a.push({displayName:o.intl.formatMessage({id:"FsLrBD",defaultMessage:"Suggest members"}),iconName:"add-user-to-group",handleClick:function(){return t._suggestMembersClicked()},disabled:!this.props.canSuggestMembers})),s.default.createElement(d.AdminConsoleActionsView,{primaryMenuItem:e,secondaryMenuItems:a})},M.prototype._renderSidebarGroupView=function(){var e=this,t=this.state.activeGroup;if(t.is_team_group)return null;var a=!t.is_admin_managed&&t.is_owner,r=this.props.canHaveAdminUi||a,n={displayName:o.intl.formatMessage({id:"tRUDJx",defaultMessage:"Add members"}),handleClick:function(){return e._addGroupMembersClicked()},disabled:!r},i=[],l=this.props.canHaveAdminUi||!t.is_admin_managed&&!this.props.groupControlledByAdmin;return t.is_member&&l&&i.push({displayName:o.intl.formatMessage({id:"kleJEv",defaultMessage:"Leave group"}),handleClick:function(){return e._leaveGroupClicked()},disabled:!1,iconName:"leave-group"}),r&&i.push({displayName:o.intl.formatMessage({id:"tvFbL0",defaultMessage:"Delete group"}),disabled:!1,iconName:"delete-group",handleClick:function(){return e._deleteGroupClicked()}}),this.props.canHaveAdminUi&&!this.props.isLimitedTeam&&(t.is_admin_managed?i.push({displayName:o.intl.formatMessage({id:"5hVLiZ",defaultMessage:"Make user-managed"}),disabled:!1,iconName:"make-user-managed-group",handleClick:function(){return e._makeGroupUserManagedClicked()}}):i.push({displayName:o.intl.formatMessage({id:"J3G7RO",defaultMessage:"Make company-managed"}),disabled:!1,iconName:"make-company-managed-group",handleClick:function(){return e._makeGroupCompanyManagedClicked()}})),r&&i.push({displayName:o.intl.formatMessage({id:"7bV9ju",defaultMessage:"Edit group"}),disabled:!1,iconName:"edit-group",handleClick:function(){return e._renameGroupClicked()}}),s.default.createElement(d.AdminConsoleActionsView,{primaryMenuItem:n,secondaryMenuItems:i})},M.prototype._getTitleElement=function(){var e=this.props.viewer.team_name;if(this.state.activeGroup){var t=this.props.mergedMembersAndGroups?"#members":"#groups";return s.default.createElement(i.MaestroHeaderTitle,null,s.default.createElement("span",{className:"team-title-with-group-view"},s.default.createElement("a",{className:"team-name",href:t},e),s.default.createElement(c.Sprite,{className:"team-name-separator",group:"web",name:"chevron",alt:o.intl.formatMessage({id:"hrvk/J",defaultMessage:"right-arrow"})}),s.default.createElement("span",{className:"group-name"},this.state.activeGroup.name)))}return s.default.createElement(i.MaestroHeaderTitle,null,e)},M.prototype._getTabsClass=function(){return h.default({"hidden-tab-bar":null!==this.state.activeGroup||this.props.mergedMembersAndGroups})},M.prototype._renderAppBody=function(){var e,t=s.default.createElement(l.TabContent,{id:"team-tab-members",title:o.intl.formatMessage({id:"HLRJwR",defaultMessage:"Members"}),hashURL:"members"},this._renderMembersTab());return e=this.props.mergedMembersAndGroups?s.default.createElement(l.TabContent,{id:"team-tab-groups",title:o.intl.formatMessage({id:"rpYp9O",defaultMessage:"Groups"}),hashPrefix:"groups/g"},this._renderGroupsTab()):s.default.createElement(l.TabContent,{id:"team-tab-groups",title:o.intl.formatMessage({id:"rpYp9O",defaultMessage:"Groups"}),hashURL:"groups",hashPrefix:"groups"},this._renderGroupsTab()),this.props.mergedMembersAndGroups?s.default.createElement("div",{className:"maestro-team-page-content"},s.default.createElement(l.Tabs,{className:this._getTabsClass(),variant:r.TabVariant.UNDERLINE},t,e)):s.default.createElement("div",{className:"maestro-team-page-content"},s.default.createElement(l.Tabs,{className:this._getTabsClass(),variant:r.TabVariant.UNDERLINE},e,t))},M.prototype.render=function(){if(this.state.initialDataLoading){var e=s.default.createElement(p.LoadingIndicator,{style:p.LoadingIndicator.LoadingIndicatorStyle.BLUE_SPINNER,className:"maestro-loading-spinner"});return s.default.createElement("div",{className:"maestro-loading-spinner-wrapper"},e)}var t=this.props.viewer.work_user;return s.default.createElement(u.MaestroChrome,{user:t,titleRegion:this._getTitleElement(),embeddedAppRegion:this._renderAppBody(),actionSidebarRegion:this._renderSidebar()})},M.displayName="TeamMaestroPage",M.defaultProps={viewer:n.Viewer.get_viewer()},M})(s.default.Component);t.TeamMaestroPageBase=M,t.TeamMaestroPageCss=["/static/css/scooter/scooter-scoped-vfljL5ijS.css","/static/css/sharing/maestro-layout-vflvEmc2B.css","/static/css/teams/team_maestro_page-vflzhgiEr.css","/static/css/legacy_packages/components-vflL6NIoo.css","/static/css/react/table-vflGOpy59.css"]})),define("modules/clean/avatar/group_avatar",["require","exports","tslib","react","prop-types","modules/clean/avatar/avatar_with_default","modules/clean/avatar/initials_avatar","modules/clean/avatar/size","modules/clean/static_urls","modules/core/user_i18n"],(function(e,t,a,s,r,o,n,i,l,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s=a.__importDefault(s),r=a.__importStar(r),o=a.__importDefault(o),d=a.__importStar(d);var p=s.default.createElement,m=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.render=function(){var e={dimension:this.props.dimension,photoUrl:this.props.group.is_team_group?l.static_url("/static/images/icons/team_32-vflk8mBzO.png"):void 0,shape:"SQUARE",name:this.props.group.name,optionalClass:this.props.optionalClass,defaultAvatar:p(n.InitialsAvatarWithColorDerivedFromName,{dimension:this.props.dimension,initials:d.getInitials(this.props.group.name).toUpperCase(),name:this.props.group.name,shape:"SQUARE",optionalClass:this.props.optionalClass})};return p(o.default,e)},t.displayName="GroupAvatar",t.propTypes={dimension:r.oneOf(i.VALID_AVATAR_DIMENSIONS).isRequired,group:r.object.isRequired,optionalClass:r.string},t})(s.default.Component);t.default=m})),define("modules/clean/acf/components/base_component",["require","exports","tslib","external/lodash","react","classnames","modules/clean/acf/utils/react_utils"],(function(e,t,a,s,r,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s=a.__importStar(s),r=a.__importDefault(r),o=a.__importDefault(o);var i=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.classnames=function(e){var t;void 0===e&&(e={});var a=e;return this.props.className&&(a=s.assignIn({},((t={})[this.props.className]=this.props.className,t),a)),o.default(a)},t.prototype.shouldRender=function(e){if(void 0===e&&(e=this.props),!e.permissions||!e.stateKey)return!0;var t=e.permissions.hasOwnProperty(e.stateKey)&&e.permissions[e.stateKey],a=!e.permissions.hasOwnProperty(e.stateKey);return t||a},t.prototype.propsOrStateKey=function(e){return this.props[e]?this.props[e]:this.props[this.props.stateKey]},t.prototype.propsOrStateKeyMethod=function(e,t){return void 0===t&&(t=e),this.props[e]?this.props[e]:this.props[""+this.props.stateKey+t]},t.prototype.renderComponent=function(){return r.default.createElement("noscript",null)},t.prototype.render=function(){return this.shouldRender()?this.renderComponent():r.default.createElement("noscript",null)},t})(r.default.Component);t.default=i,t.componentClassMetadata=function(e,t,a,s,r){void 0===t&&(t={}),void 0===a&&(a={}),void 0===s&&(s=i),void 0===r&&(r=e.name),n.classMetadata(e,s,t,a,r)}})),define("modules/clean/acf/components/breadcrumbs",["require","exports","tslib","react","prop-types","modules/clean/acf/components/base_component","modules/clean/acf/components/sprite"],(function(e,t,a,s,r,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s=a.__importDefault(s),r=a.__importStar(r);var i=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.renderComponent=function(){var e=this;return s.default.createElement("ul",{className:this.classnames({"c-breadcrumbs":!0})},this.props.items.map((function(t,a){return a<e.props.items.length-1?s.default.createElement("li",{key:"breadcrumb-"+a},s.default.createElement("a",{href:t.url},s.default.createElement("h1",{className:"f1"},t.name)),s.default.createElement(n.Sprite,{className:"c-breadcrumbs__arrow",group:"web",name:"chevron",alt:""})):s.default.createElement("li",{key:"breadcrumb-"+a},s.default.createElement("h1",{className:"f1"},t.name))})))},t})((o=a.__importStar(o)).default);t.default=i,o.componentClassMetadata(i,{items:r.arrayOf(r.shape({name:r.string,url:r.string})).isRequired})})),define("modules/clean/acf/utils/react_utils",["require","exports","tslib","external/lodash"],(function(e,t,a,s){"use strict";function r(e,t){return void 0===t&&(t={}),s.assignIn({},e.propTypes||{},t)}function o(e,t){return void 0===t&&(t={}),s.assignIn({},e.defaultProps||{},t)}Object.defineProperty(t,"__esModule",{value:!0}),s=a.__importStar(s),t.basePropTypes=r,t.baseDefaultProps=o,t.classMetadata=function(e,t,a,s,n){void 0===a&&(a={}),void 0===s&&(s={}),void 0===n&&(n=e.name),e.displayName=n,e.propTypes=r(t,a),e.defaultProps=o(t,s)},t.childProps=function(e,t,r,o){return void 0===r&&(r=[]),void 0===o&&(o={}),s.assignIn(o,s.omit.apply(s,a.__spreadArrays([t,"className","children","style","renderImportantOnly","renderImportant","viewName","element"],r)),e.props)}})),define("modules/clean/acf/components/sprite",["require","exports","tslib","react","modules/clean/react/sprite","modules/clean/acf/components/base_component"],(function(e,t,a,s,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s=a.__importDefault(s);var n=(function(e){function t(t){var a=e.call(this,t)||this;return a.state={hover:!1},a}return a.__extends(t,e),t.prototype.spriteName=function(){return this.props.hoverName&&this.state.hover?this.props.hoverName:this.props.name},t.prototype.setHover=function(e){this.setState({hover:e})},t.prototype.render=function(){var e=this;return s.default.createElement("div",{className:this.classnames(),onMouseOver:function(){return e.setHover(!0)},onMouseOut:function(){return e.setHover(!1)},onClick:this.props.onClick},s.default.createElement(r.Sprite,{group:this.props.group,name:this.spriteName(),alt:this.props.alt}))},t.defaultProps={onClick:function(){}},t})((o=a.__importDefault(o)).default);t.Sprite=n}));
//# sourceMappingURL=pkg-team-core.min.js-vflrimFa0.map