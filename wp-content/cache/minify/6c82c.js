jQuery(document).on("madxartwork/render/cf-video",function(e,a,t){container_element=".madxartwork-element-"+a,iframe_element=".madxartwork-element-"+a+" .cf-type-video iframe",iframe_width=jQuery(iframe_element).width(),aspectRatio=t,169==aspectRatio?ar=[16,9]:43==aspectRatio?ar=[4,3]:ar=[3,2],iframe_height=iframe_width*(ar[1]/ar[0]),jQuery(iframe_element).height(iframe_height)}),jQuery(document).on("click",".madxartwork-widget-ae-post-blocks .ae-pagination-wrapper a",function(){var e,i=jQuery(this).closest(".ae-post-widget-wrapper"),a=i.data("source");if(i.hasClass("no-ajax"))return!0;var r=i.siblings(".ae-post-overlay"),t=i.data("wid"),s=i.closest(".madxartwork").attr("class");if(0<i.parents(".ae_data").length)var n=i.parents(".ae_data").attr("data-aetid");else n=i.data("pid");if(n=s.split("-")[1],o="","related"==a||"relation"==a)var o=i.data("pid");e=jQuery(this).data("ae-page-id"),r.show();var d={pid:n,wid:t,cpid:o,page_num:e,action:"ae_post_data",fetch_mode:"paged"};return jQuery.ajax({url:aepro.ajaxurl,dataType:"json",data:d,method:"POST",success:function(e){if(i.html(e.data),i.find(".ae-featured-bg-yes").each(function(){img=jQuery(this).attr("data-ae-bg"),jQuery(this).css("background-image","url("+img+")")}),i.find(".ae-link-yes").data("ae-url")&&i.find(".ae-link-yes").on("click",function(e){jQuery(this).data("ae-url")&&jQuery(this).hasClass("ae-new-window-yes")?window.open(jQuery(this).data("ae-url")):location.href=jQuery(this).data("ae-url")}),i.find(".ae-cf-wrapper.hide").each(function(){jQuery(this).closest(".madxartwork-widget-ae-custom-field").hide()}),i.hasClass("ae-masonry-yes")){var a=i.find(".ae-post-list-wrapper").masonry({horizontalOrder:!0});a.imagesLoaded().progress(function(){a.masonry("layout")})}if(i.find(".madxartwork-invisible").each(function(){settings=jQuery(this).data("settings"),animation=settings.animation||settings._animation,jQuery(this).removeClass("madxartwork-invisible").removeClass(animation).addClass(animation)}),"no"==i.data("disable_scroll_on_ajax_load")){var t=i.data("pagination_scroll_top_offset");jQuery("html,body").animate({scrollTop:i.offset().top-t},"slow")}r.hide()}}),!1}),jQuery(document).on("click",".madxartwork-widget-ae-portfolio .ae-pagination-wrapper a, .madxartwork-widget-ae-portfolio .filter-items a",function(){var e,t=jQuery(this).closest(".ae-post-widget-wrapper"),i=t.siblings(".ae-post-overlay"),a=t.data("wid"),r=t.closest(".madxartwork").attr("class");if(0<t.parents(".ae_data").length)var s=t.parents(".ae_data").attr("data-aetid");else s=t.data("pid");s=r.split("-")[1],term_id=jQuery(this).data("term-id"),"undefined"==typeof term_id&&(term_id=t.find(".filter-items.active a").data("term-id")),cpid="",e=jQuery(this).data("ae-page-id"),i.show();var n={pid:s,wid:a,cpid:cpid,term_id:term_id,page_num:e,action:"ae_post_data",fetch_mode:"paged"};return jQuery.ajax({url:aepro.ajaxurl,dataType:"json",data:n,method:"POST",success:function(e){if(t.html(e.data),t.find(".ae-featured-bg-yes").each(function(){img=jQuery(this).attr("data-ae-bg"),jQuery(this).css("background-image","url("+img+")")}),t.find(".ae-cf-wrapper.hide").each(function(){jQuery(this).closest(".madxartwork-widget-ae-custom-field").hide()}),t.hasClass("ae-masonry-yes")){var a=t.find(".ae-post-list-wrapper").masonry({horizontalOrder:!0});a.imagesLoaded().progress(function(){a.masonry("layout")})}t.find(".madxartwork-invisible").each(function(){settings=jQuery(this).data("settings"),animation=settings.animation||settings._animation,jQuery(this).removeClass("madxartwork-invisible").removeClass(animation).addClass(animation)}),t.find("article.ae-post-list-item").css("opacity","1"),i.hide()}}),!1});