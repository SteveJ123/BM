define(["require","exports","tslib","react","react-intl","modules/core/i18n","modules/core/uri","modules/core/browser","modules/clean/static_urls","modules/clean/react/file_activity_stream/thirdparty_activity_clickable_text","modules/clean/react/file_activity_stream/utils","modules/clean/react/file_sidebar/store/file_activity/types","modules/clean/react/file_activity_stream/file_activity_stream_card","modules/clean/react/file_activity_stream/thirdparty_activity_onboarding_logic","modules/clean/integrations/log_event","deep-integrations/instrumentation/constants"],(function(e,t,a,r,i,s,d,n,l,o,_,c,f,h,u,g){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importDefault(r),n=a.__importStar(n);var m={attach_file_to_card:{details_yes__actor_other:i.defineMessage({id:"fcIlGX",defaultMessage:"<strong>{actor_name}</strong> added this file to the <CardLink>{card_name}</CardLink> card in {list_name}"}),details_yes__actor_self:i.defineMessage({id:"2Kunae",defaultMessage:"<strong>You</strong> added this file to the <CardLink>{card_name}</CardLink> card in {list_name}"}),details_yes__actor_no:i.defineMessage({id:"kVwtlK",defaultMessage:"This file was added to the <CardLink>{card_name}</CardLink> card in {list_name}"}),details_no__actor_other:i.defineMessage({id:"Jv3Yc3",defaultMessage:"<strong>{actor_name}</strong> added this file to <AuthLink>Trello</AuthLink>"}),details_no__actor_self:i.defineMessage({id:"NM+qbp",defaultMessage:"<strong>You</strong> added this file to <AuthLink>Trello</AuthLink>"}),details_no__actor_no:i.defineMessage({id:"SgCadx",defaultMessage:"This file was added to <AuthLink>Trello</AuthLink>"})},move_card_between_lists:{details_yes__actor_other:i.defineMessage({id:"B4hIYu",defaultMessage:"<strong>{actor_name}</strong> moved the <CardLink>{card_name}</CardLink> card with this file attached to {list_name}"}),details_yes__actor_self:i.defineMessage({id:"93zKII",defaultMessage:"<strong>You</strong> moved the <CardLink>{card_name}</CardLink> card with this file attached to {list_name}"}),details_yes__actor_no:i.defineMessage({id:"RtTNKt",defaultMessage:"The <CardLink>{card_name}</CardLink> card with this file attached was moved to {list_name}"})},move_card_between_boards:{details_yes__actor_other:i.defineMessage({id:"4acOjy",defaultMessage:"<strong>{actor_name}</strong> moved the <CardLink>{card_name}</CardLink> card with this file attached to the {board_name} board"}),details_yes__actor_self:i.defineMessage({id:"DBGyx6",defaultMessage:"<strong>You</strong> moved the <CardLink>{card_name}</CardLink> card with this file attached to the {board_name} board"}),details_yes__actor_no:i.defineMessage({id:"idHU9i",defaultMessage:"The <CardLink>{card_name}</CardLink> card with this file attached was moved to the {board_name} board"}),details_no__actor_other:i.defineMessage({id:"L3AHro",defaultMessage:"<strong>{actor_name}</strong> moved the {card_name} card with this file attached to another board"}),details_no__actor_self:i.defineMessage({id:"vB1R6p",defaultMessage:"<strong>You</strong> moved the {card_name} card with this file attached to another board"}),details_no__actor_no:i.defineMessage({id:"BhxxXf",defaultMessage:"The {card_name} card with this file attached was moved to another board"})},archive_card:{details_yes__actor_other:i.defineMessage({id:"svW9/s",defaultMessage:"<strong>{actor_name}</strong> archived the <CardLink>{card_name}</CardLink> card with this file attached"}),details_yes__actor_self:i.defineMessage({id:"qhG5Ev",defaultMessage:"<strong>You</strong> archived the <CardLink>{card_name}</CardLink> card with this file attached"}),details_yes__actor_no:i.defineMessage({id:"ejbidA",defaultMessage:"The <CardLink>{card_name}</CardLink> card with this file attached was archived"})},unarchive_card:{details_yes__actor_other:i.defineMessage({id:"HdZiKF",defaultMessage:"<strong>{actor_name}</strong> unarchived the <CardLink>{card_name}</CardLink> card with this file attached"}),details_yes__actor_self:i.defineMessage({id:"qTxTQV",defaultMessage:"<strong>You</strong> unarchived the <CardLink>{card_name}</CardLink> card with this file attached"}),details_yes__actor_no:i.defineMessage({id:"EI542R",defaultMessage:"The <CardLink>{card_name}</CardLink> with this file attached was unarchived to the {board_name} board"})}},v=function(e,t){return u.createIntegrationsActionsLogger().logEvent({service_type:"trello",feature_name:g.InstrFeatureType.TrelloActivityFeed,event_name:e,extra:t})};t.TrelloFileActivityCard=function(e){var t=e.activity,i=e.file,u=e.viewingUser,y=r.default.useState(r.default.createElement("span",null)),M=y[0],k=y[1],C={actor_name:t.user.display_name,card_name:t.trello_card_name,list_name:t.trello_list_name,board_name:t.trello_board_name,strong:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.default.createElement("strong",null,e)},CardLink:function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];return r.default.createElement(o.ClickableText,{hoverText:s.intl.formatMessage({id:"PRuNTW",defaultMessage:"View in Trello"}),clickHandler:function(){var e=t.trello_card_url;e&&(n.unsafe_open_tab(new d.URI({scheme:"https",authority:"trello.com",path:"/c/"+e})),v(g.InstrEventType.UserClick,{link_type:"trello_card"}))}},e)},AuthLink:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.default.cloneElement.apply(r.default,a.__spreadArrays([M,{}],e))}};h.userHasNotConnectedToService(u,"trello").then((function(e){e&&k(r.default.createElement(o.ClickableText,{hoverText:s.intl.formatMessage({id:"vIACNF",defaultMessage:"Connect to Trello"}),clickHandler:function(){n.open_tab(new d.URI({path:"/landing/trello"})),v(g.InstrEventType.UserClick,{link_type:"trello_landing_page"})}}))}));var L,p=t.user.id!==_.UNKNOWN_USER_ID,w=_.isViewingUser({activity:t,file:i,viewingUser:u}),T=!(!t.trello_card_name||!t.trello_card_url),b=!(!t.trello_list_name||!t.trello_board_name);if(v(g.InstrEventType.RenderedFeature,{activity_type:t.trello_event_type}),!T){var A=t.trello_event_type===c.TrelloEventType.attach_file_to_card&&!b,E=t.trello_event_type===c.TrelloEventType.move_card_between_boards&&!!t.trello_card_name&&!b;if(!(A||E))return null}L=p?b?w?"details_yes__actor_self":"details_yes__actor_other":w?"details_no__actor_self":"details_no__actor_other":b?"details_yes__actor_no":"details_no__actor_no";var I=m[t.trello_event_type][L];return I?r.default.createElement(f.FileActivityStreamCard,{message:s.intl.formatMessage(I,C),timestamp:t.timestamp,user:t.user,className:"file_trello_activity_stream_card",thirdPartyData:{logoUrl:l.static_url("/static/images/thirdparty/trello_icon-vfl-FetdA.svg"),localizedName:s.intl.formatMessage({id:"Up1LaJ",defaultMessage:"Trello"})}}):null}}));
//# sourceMappingURL=trello_file_activity_card.min.js-vflyzP96F.map