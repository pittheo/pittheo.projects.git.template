function hideFrameContainer(d, h, e) {
	if (document.getElementById) {
		var j = document.getElementById(d);
		var g = document.getElementById(h);
		j.style.display = "none";
		document.getElementById("headline_newsletter").style.display = "block";
		document.getElementById("headline_createprofile").style.display = "none"
	}
}
function changeHeadline() {
	document.getElementById("headline_newsletter").style.display = "none";
	document.getElementById("headline_createprofile").style.display = "block"
}
function hideEl(c) {
	$("#" + c).hide();
}
function showEl(c) {
	$("#" + c).show();
}
function showFrameContainer(k, g, j, d, h, v, q, m, u) {
	if (document.getElementById) {
		var o = document.getElementById(k);
		var r = document.getElementById(g);
		var n = document.getElementById(j);
		if (r.style.display == "block") {
			r.style.display = "none";
			return false
		}
		if (n.src != d) {
			n.src = d
		}
		r.style.visibility = "hidden";
		r.style.display = "block";
		var l = $(o).position().left, t = $(o).position().top;
		if (q) {
			l += q
		}
		if (m) {
			t += m
		}
		if (!h) {
			h = r.offsetWidth
		}
		var w = document.getElementById("bodyconstraint").offsetWidth;
		if ((l + h) > w) {
			l = (w - h - 40)
		}
		r.style.left = l + "px";
		r.style.top = t + "px";
		r.style.visibility = "visible";
		return false
	} else {
		window.open(d)
	}
}
function sSc(d, c, e) {
	if (document.getElementById) {
		document.getElementById("rsc_" + d).innerHTML = e
	}
}
function sSc3(c, d) {
	$("li[id^=" + c + "]").attr("style", "display: none; ");
	$("li[id^=" + d + "]").removeAttr("style")
}
function sSc2(f, e, g) {
	if (document.getElementById) {
		if (document.getElementById("rnr")) {
			document.getElementById("rnr").innerHTML = f
		}
		for ( var d = -1; d < 10; d++) {
			var c = document.getElementById("rl" + d);
			if (c) {
				c.style.color = "";
				c.style.textDecoration = "underline"
			}
		}
		e.style.color = "#003580";
		e.style.textDecoration = "none";
		e.blur();
		$("#gr_profile_chooser ul").removeClass().addClass(g);
		$(".review_filter_sub").text($(e).find(".key").text());
		if (g == "group" || g == "review_category_group_of_friends") {
			classname = "group_big"
		} else {
			if (g == "solo_traveller") {
				classname = "solo_big"
			} else {
				if (g == "family_with_young_children"
						|| g == "review_category_family") {
					classname = "youngchildren_big"
				} else {
					if (g == "mature_couple") {
						classname = "maturecouple_big"
					} else {
						if (g == "family_with_older_children") {
							classname = "oldchildren_big"
						} else {
							if (g == "with_friends") {
								classname = "withfriends_big"
							} else {
								if (g == "young_couple"
										|| g == "review_category_couple") {
									classname = "youngcouple_big"
								} else {
									classname = "global_big"
								}
							}
						}
					}
				}
			}
		}
		$(".review_user_type").attr("class",
				"review_user_type type_" + classname)
	}
}
if ($.ajaxSetup) {
	$.ajaxSetup({
		cache : false,
		beforeSend : function(c) {
			c
					.setRequestHeader("X-Booking-Pageview-Id",
							booking.env.pageview_id);
			c.setRequestHeader("X-Booking-AID", booking.env.aid);
			c.setRequestHeader("X-Booking-Session-Id", booking.env.b_sid)
		}
	})
}
if ($(".b_msie_6").length) {
	$(".b_msie_6 .bigbluebutton").mouseenter(function() {
		$(this).addClass("bigbluebutton_hover")
	});
	$(".b_msie_6 .bigbluebutton").mouseleave(function() {
		$(this).removeClass("bigbluebutton_hover")
	});
	$(".b_msie_6 .price_button").mouseenter(function() {
		$(this).addClass("price_button_hover")
	});
	$(".b_msie_6 .price_button").mouseleave(function() {
		$(this).removeClass("price_button_hover")
	})
}
$("#signup_box").hide();
function ShowHideSignup() {
	$("#signup_box").animate({
		height : "toggle"
	}, {
		duration : 500
	})
}
$("#signup_box #signupForm").click(function(c) {
	c.stopPropagation()
});
$("span.facebook_after_signup").click(function(c) {
	window.open("http://www.facebook.com/bookingcom");
	c.stopPropagation();
	return false
});
$(function() {
	$(".newsletter_ajax_error").hide();
	$('input#to[type="text"]').css({
		backgroundColor : "#FFFFFF"
	});
	$('input#to[type="text"]').focus(function() {
		$(this).css({
			color : "#003580"
		});
		if (this.value == this.defaultValue) {
			this.value = ""
		}
		if (this.value != this.defaultValue) {
			this.select()
		}
	});
	$("input.text-input").blur(function() {
		$(this).css({
			backgroundColor : "#FFFFFF"
		})
	});
	$("div#newsletterform_form a.flashdeals_nosubscribe").click(function() {
		$("div#flashdealsbg_wrapper h2.flashdeals_header_one").hide();
		$("div#flashdealsbg_wrapper h2.flashdeals_header_two").show();
		$("div#flashdealsbg_wrapper h3.flashdeals_subheader_one").hide();
		$("div#flashdealsbg_wrapper h3.flashdeals_subheader_two").show();
		$("div#flashdealsbg_wrapper a.flashdeals_nosubscribe").hide();
		$("div#flashdealsbg_wrapper a.flashdeals_gotobooking").show();
		$("div#flashdealsbg_wrapper input.newsletter_button").hide();
		$("div#flashdealsbg_wrapper input.newsletter_button_deals").show();
		return false
	})
});
var sNSExperiments = "experiments";
var sNSStartup = "startup";
var sNSExperimentsLoad = "experiments_load";
var sNSStartupLoad = "startup_load";
booking.ensureNamespaceExists(sNSExperiments);
booking.ensureNamespaceExists(sNSStartup);
booking.ensureNamespaceExists(sNSExperimentsLoad);
booking.ensureNamespaceExists(sNSStartupLoad);
booking[sNSStartup].init = function(k) {
	var j = [];
	var e = 0;
	if (k == "ready") {
		var h = sNSExperiments;
		var d = sNSStartup
	}
	if (k == "load") {
		var h = sNSExperimentsLoad;
		var d = sNSStartupLoad
	}
	for (sExperiment in booking[h]) {
		if (typeof booking[h][sExperiment].init == "function") {
			var c = (booking[h][sExperiment].priority) ? booking[h][sExperiment].priority
					: 9;
			var g = true;
			var l = "b_site_experiment_" + sExperiment;
			if (!booking.env[l]) {
				g = false
			}
			if (g) {
				j.push([ c, sExperiment, h, false ])
			} else {
				if (typeof booking[h][sExperiment].initElse == "function") {
					j.push([ c, sExperiment, h, true ])
				} else {
					booking[h][sExperiment].init = null
				}
			}
		}
	}
	for (sStartup in booking[d]) {
		if (typeof booking[d][sStartup].init == "function") {
			var c = (booking[d][sStartup].priority) ? booking[d][sStartup].priority
					: 9;
			j.push([ c, sStartup, d, false ])
		}
	}
	if (j.length > 0) {
		j.sort();
		for ( var f = 0; f < j.length; f++) {
			sInitItem = j[f];
			booking[sInitItem[2]][sInitItem[1]].ns = "booking." + sInitItem[2];
			booking[sInitItem[2]][sInitItem[1]].name = sInitItem[1];
			if (sInitItem[3] == true) {
				e = booking[sInitItem[2]][sInitItem[1]].initElse()
			} else {
				e = booking[sInitItem[2]][sInitItem[1]].init()
			}
			if (typeof e == "boolean") {
				if (e) {
					booking[sInitItem[2]][sInitItem[1]].init = null
				}
			}
		}
	}
};
booking.env.isTracking = false;
booking.env.trackExperiment = function(c, d) {
	if (booking.env.isTracking) {
		setTimeout(function() {
			booking.env.trackExperiment(c, d)
		}, 1500)
	} else {
		booking.env.isTracking = true;
		var f = 1;
		var g = Math.random();
		var e = (d) ? ";what=" + d : "";
		var h = '<img style="height:1px;width:1px;visibility:hidden;" src="/js_tracking?ver='
				+ f
				+ e
				+ ";sid="
				+ booking.env.b_sid
				+ ";aid="
				+ booking.env.b_aid
				+ ";pid="
				+ booking.env.pageview_id
				+ ";exps=" + c + ";random=" + g + '">';
		$(document.body).append(h);
		setTimeout(function() {
			booking.env.isTracking = false
		}, 1500)
	}
};
$(document).ready(function() {
	booking[sNSStartup].init("ready")
});
$(window).load(function() {
	booking[sNSStartup].init("load")
});
if (!window.console) {
	window.console = new function() {
		this.log = function(c) {
		};
		this.dir = function(c) {
		};
		this.debug = function(c) {
		};
		this.info = function(c) {
		};
		this.warn = function(c) {
		};
		this.table = function(c) {
		};
		this.trace = function() {
		};
		this.time = function(c) {
		};
		this.timeEnd = function(c) {
		};
		this.info = function(c) {
		}
	}
}
booking[sNSStartup].anchorJump = {
	priority : 9,
	init : function() {
		if ($("#newsletterbox .error").length) {
			location.href = location.href + "#errormsg"
		}
		$(".forgotten a, a.forgotten")
				.click(
						function() {
							window
									.open(
											this.href,
											"",
											"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=500,height=500,left=200,top=200");
							return false
						})
	}
};
function show_group_rooms_by_persons(d) {
	var c = $(d).parent().parent().parent().parent().parent().children(
			"table.group_rooms_by_persons_groups_room_table");
	table_display = $(c).css("display"), links = $(d).parent().parent()
			.children("td").children(
					".group_rooms_red_link, .group_rooms_green_link"),
			plus_minus = $(d).parent().parent().children("td").children(
					"a.show_group_rooms_by_persons").children("span");
	if (table_display == "none") {
		$(c).show();
		$(links).hide();
		$(plus_minus)
				.html(
						'<img src="//q.bstatic.com/static/img/experiments/icon_open.gif" width="15" height="15" alt="open">')
	} else {
		$(c).hide();
		$(plus_minus)
				.html(
						'<img src="//r.bstatic.com/static/img/experiments/icon_shut.gif" width="15" height="15" alt="close">');
		$(links).show()
	}
}
window.onload = function() {
	$("table.group_rooms_by_persons_groups_room_table").css("display", "none")
};
room_group_sniffing = {
	init : function() {
		if (typeof (b_cookie) == "undefined") {
			b_cookie = {}
		}
		b_cookie.my_value = "group_sniffing_is_true";
		if (typeof (JSON) != "undefined") {
			$.cookie("b", JSON.stringify(b_cookie), {
				expires : 30,
				path : "/",
				domain : booking.env.b_domain_end
			})
		}
	},
	closed : function() {
		b_cookie.my_value = "group_sniffing_is_false";
		if (typeof (JSON) != "undefined") {
			$.cookie("b", JSON.stringify(b_cookie), {
				expires : 30,
				path : "/",
				domain : booking.env.b_domain_end
			})
		}
	}
};
booking[sNSStartupLoad].calendar = {
	priority : 9,
	version : 1.4,
	datefmt : "YYYY MM DD",
	minimalDays : 1,
	maximalDays : 30,
	oldDays : 1,
	from : {
		date : null,
		day : null,
		month : null,
		year : null
	},
	till : {
		date : null,
		day : null,
		month : null,
		year : null
	},
	viewDateFrom : new Date(),
	viewDateTill : new Date(),
	oneDayInMS : 86400000,
	calendars : [],
	calendarTypes : {
		checkin_day : {
			isTill : false,
			isDay : true
		},
		checkin_monthday : {
			isTill : false,
			isDay : true
		},
		checkin_year_month : {
			isTill : false,
			isDay : false
		},
		pre_checkin_year_month : {
			isTill : false,
			isDay : false
		},
		checkout_day : {
			isTill : true,
			isDay : true
		},
		checkout_monthday : {
			isTill : true,
			isDay : true
		},
		checkout_year_month : {
			isTill : true,
			isDay : false
		},
		pre_checkout_year_month : {
			isTill : true,
			isDay : false
		}
	},
	maxMonthsInFuture : 12,
	maxDaysInFuture : 365,
	maxDaysInThePast : 1,
	syncDate : null,
	userServDate : false,
	dateFormat : function(j, v, q) {
		var k = /D{1,4}|M{1,4}|YY(?:YY)?/g, h = function(m, d) {
			m = String(m);
			d = d || 2;
			while (m.length < d) {
				m = "0" + m
			}
			return m
		};
		var g = this;
		if (arguments.length == 1
				&& Object.prototype.toString.call(j) == "[object String]"
				&& !/\d/.test(j)) {
			v = j;
			j = undefined
		}
		j = j ? new Date(j) : new Date;
		if (isNaN(j)) {
			throw SyntaxError("invalid date")
		}
		v = String(v || g.datefmt);
		if (v.slice(0, 4) == "UTC:") {
			v = v.slice(4);
			q = true
		}
		var t = q ? "getUTC" : "get", n = j[t + "Date"](), c = j[t + "Day"](), f = j[t
				+ "Month"](), o = j[t + "FullYear"](), r = j[t + "Hours"](), l = j[t
				+ "Minutes"](), u = j[t + "Seconds"](), e = {
			D : n,
			DD : h(n),
			DDD : booking.env.b_simple_weekdays_for_js[(c + 6) % 7],
			DDDD : booking.env.b_long_weekdays[(c + 6) % 7],
			M : f + 1,
			MM : h(f + 1),
			MMM : booking.env.b_short_months_abbr[f],
			MMMM : booking.env.b_short_months[f],
			YY : String(o).slice(2),
			YYYY : o
		};
		return v.replace(k, function(d) {
			return d in e ? e[d] : d.slice(1, d.length - 1)
		})
	},
	searchMinDays : function(c) {
		this.minimalDays = c
	},
	maxYearsInFuture : function() {
		this.today = this.noHourDate(null);
		this.maxMonthsInFuture = 12;
		this.maxDaysInFuture = 365;
		if (booking.env.b_site_experiment_extra_calendar_month) {
			if (this.maxMonthsInFuture < 13) {
				this.maxMonthsInFuture = 13
			}
			if (this.maxMonthsInFuture < 395) {
				this.maxDaysInFuture = 395
			}
		}
		this.tomorrow = this.dateAfterDays(this.today, 1);
		this.endOfYear1 = this.dateAfterDays(this.today, this.maxDaysInFuture);
		this.endOfYear2 = this.dateAfterDays(this.today,
				this.maxDaysInFuture - 1)
	},
	setPast : function(c) {
		this.maxDaysInThePast = c
	},
	syncDates : function(c, d, j, f, h) {
		if (!h) {
			$("#availcheck").attr("checked", false);
			if (booking.env.b_site_experiment_no_rooms_searchbox) {
				booking[sNSExperiments].no_rooms_searchbox.hide_no_dates()
			}
			$("#define_group").removeClass("disableme");
			$("#define_group input").removeAttr("disabled")
		}
		if (c) {
			this.till.day = (d == null) ? this.till.day : d;
			this.till.month = (j == null) ? this.till.month : j;
			this.till.year = (f == null) ? this.till.year : f;
			if (this.till.day != null && this.till.month != null
					&& this.till.year != null) {
				this.till.date = new Date(this.till.year + "/"
						+ this.till.month + "/" + this.till.day + " 00:00:00");
				this.viewDateTill = new Date(this.till.year + "/"
						+ this.till.month + "/" + this.till.day + " 00:00:00")
			}
		} else {
			this.from.day = (d == null) ? this.from.day : d;
			this.from.month = (j == null) ? this.from.month : j;
			this.from.year = (f == null) ? this.from.year : f;
			if (this.from.day != null && this.from.month != null
					&& this.from.year != null) {
				this.from.date = new Date(this.from.year + "/"
						+ this.from.month + "/" + this.from.day + " 00:00:00");
				this.viewDateFrom = new Date(this.from.year + "/"
						+ this.from.month + "/" + this.from.day + " 00:00:00")
			}
		}
		var g = false;
		if (!c && this.from.date != null) {
			if (this.till.date != null) {
				if (this.till.date <= this.from.date) {
					this.till.date = this.dateAfterDays(this.from.date,
							this.oldDays);
					g = true
				}
			} else {
				if (!h) {
					this.till.date = this.dateAfterDays(this.from.date,
							this.minimalDays);
					g = true
				}
			}
		} else {
			if (c && this.till.date != null) {
				if (this.from.date == null) {
					if (!h) {
						this.from.date = this.dateAfterDays(this.till.date,
								~(this.minimalDays - 1));
						g = true
					}
				}
			}
		}
		if (g) {
			if (!c) {
				this.till.year = this.till.date.getFullYear();
				this.till.month = this.till.date.getMonth() + 1;
				this.till.day = this.till.date.getDate();
				this.viewDateTill = new Date(this.till.year + "/"
						+ this.till.month + "/" + this.till.day + " 00:00:00")
			} else {
				this.from.year = this.from.date.getFullYear();
				this.from.month = this.from.date.getMonth() + 1;
				this.from.day = this.from.date.getDate();
				this.viewDateFrom = new Date(this.from.year + "/"
						+ this.from.month + "/" + this.from.day + " 00:00:00")
			}
		}
		for ( var e = 0; e < this.calendars.length; e++) {
			$(this.calendars[e]).trigger("changed_date", [ c, g ])
		}
	},
	init : function() {
		if (booking.env.b_site_experiment_fix_user_dates) {
			var f = booking.env.b_current_datetime;
			this.syncDate = f.replace(/-/gi, "/");
			var g = new Date(this.syncDate);
			g.setDate(g.getDate() + 1);
			var e = new Date();
			this.syncDate = new Date(this.syncDate);
			this.syncDate.setDate(this.syncDate.getDate() - 0.5);
			if (g < e) {
				this.userServDate = true;
				this.viewDateFrom = new Date(this.syncDate);
				this.viewDateTill = new Date(this.syncDate)
			} else {
				var d = new Date(this.syncDate);
				d.setDate(d.getDate() - 1);
				if (d > e) {
					this.userServDate = true;
					this.viewDateFrom = new Date(this.syncDate);
					this.viewDateTill = new Date(this.syncDate)
				}
			}
		}
		this.maxYearsInFuture();
		this.initAddHandlers();
		if (booking.env.b_site_experiment_calendar_with_input) {
			for ( var c = 0; c < this.calendars.length; c++) {
				if (this.calendars[c]) {
					$(this.calendars[c]).closest(".calendar_with_input")
							.removeClass("calendar_with_input__loading")
				}
			}
		}
	},
	initAddHandlers : function(c) {
		var e = this;
		if (c) {
			sSelTar = "#" + c + " "
		} else {
			sSelTar = ""
		}
		$(sSelTar + "select")
				.each(
						function() {
							if (e.calendarTypes[$(this).attr("name")]) {
								e.calendars.push(this);
								var f = $(this).val();
								if (f != "0") {
									var h = e.calendarTypes[$(this)
											.attr("name")];
									if (h.isDay) {
										if (h.isTill) {
											e.till.day = f
										} else {
											e.from.day = f
										}
									} else {
										var g = f.split("-");
										if (g.length && g.length > 0) {
											if (h.isTill) {
												e.till.year = g[0];
												e.till.month = g[1]
											} else {
												e.from.year = g[0];
												e.from.month = g[1]
											}
										}
									}
								}
								$(this)
										.bind(
												"changed_date",
												function(k, j, n) {
													$("input", this.parentNode)
															.each(
																	function() {
																		if (e.calendarTypes[$(
																				this)
																				.attr(
																						"name")]) {
																			var o = e.calendarTypes[$(
																					this)
																					.attr(
																							"name")];
																			if (o.isDay
																					&& o.isTill
																					&& e.till.day != null) {
																				$(
																						this)
																						.val(
																								e.till.day)
																			}
																			if (o.isDay
																					&& !o.isTill
																					&& e.from.day != null) {
																				$(
																						this)
																						.val(
																								e.from.day)
																			}
																			if (!o.isDay
																					&& o.isTill
																					&& e.till.month != null
																					&& e.till.year != null) {
																				$(
																						this)
																						.val(
																								e.till.year
																										+ "-"
																										+ e.till.month)
																			}
																			if (!o.isDay
																					&& !o.isTill
																					&& e.from.month != null
																					&& e.from.year != null) {
																				$(
																						this)
																						.val(
																								e.from.year
																										+ "-"
																										+ e.from.month)
																			}
																		}
																	});
													var l = e.calendarTypes[$(
															this).attr("name")];
													if (((j || n) && l.isTill)
															|| ((!j || n) && !l.isTill)) {
														if (l.isDay) {
															if ((l.isTill
																	&& e.till.year != null && e.till.month != null)
																	|| (!l.isTill
																			&& e.from.year != null && e.from.month != null)) {
																e
																		.rebuildDaySelect(
																				this,
																				l.isTill)
															}
														} else {
															if (l.isTill
																	&& e.till.year != null
																	&& e.till.month != null) {
																e
																		.selectOption(
																				this,
																				e.till.year
																						+ "-"
																						+ e.till.month)
															} else {
																if (!l.isTill
																		&& e.from.year != null
																		&& e.from.month != null) {
																	e
																			.selectOption(
																					this,
																					e.from.year
																							+ "-"
																							+ e.from.month)
																}
															}
														}
													}
													if (booking.env.b_site_experiment_calendar_with_input) {
														if (e.calendarTypes[$(
																this).attr(
																"name")]) {
															var m = e.calendarTypes[$(
																	this).attr(
																	"name")];
															if (m.isDay
																	&& m.isTill
																	&& e.till.day != null) {
																$(
																		"input.check_date",
																		this.parentNode)
																		.val(
																				e
																						.dateFormat(
																								e.till.date,
																								booking.env.date_format_locale))
																		.removeClass(
																				"noInitalInputValue")
															}
															if (m.isDay
																	&& !m.isTill
																	&& e.from.day != null) {
																$(
																		"input.check_date",
																		this.parentNode)
																		.val(
																				e
																						.dateFormat(
																								e.from.date,
																								booking.env.date_format_locale))
																		.removeClass(
																				"noInitalInputValue")
															}
														}
													}
												});
								$(this)
										.change(
												function() {
													var m = e.calendarTypes[$(
															this).attr("name")];
													var l = $(this).val();
													var k = l.split("-");
													if (l != "0") {
														if ($(this).parents(
																".newcalendar").length) {
															var j = $(this)
																	.parents(
																			".newcalendar");
															if (k.length
																	&& k.length > 1) {
																if ($(this)
																		.parents(
																				".calendarTill").length) {
																	e.viewDateTill = new Date(
																			k[0]
																					+ "/"
																					+ k[1]
																					+ "/"
																					+ e.viewDateTill
																							.getDate()
																					+ " 00:00:00");
																	e
																			.rebuildCalendarTable(
																					$(
																							".calendarTill table",
																							j)
																							.get(
																									0),
																					true,
																					e.viewDateTill
																							.getMonth() + 1,
																					e.viewDateTill
																							.getFullYear())
																} else {
																	e.viewDateFrom = new Date(
																			k[0]
																					+ "/"
																					+ k[1]
																					+ "/"
																					+ e.viewDateFrom
																							.getDate()
																					+ " 00:00:00");
																	e
																			.rebuildCalendarTable(
																					$(
																							"table",
																							j)
																							.get(
																									0),
																					false,
																					e.viewDateFrom
																							.getMonth() + 1,
																					e.viewDateFrom
																							.getFullYear())
																}
															}
														} else {
															e
																	.syncDates(
																			m.isTill,
																			(m.isDay) ? l
																					: null,
																			(m.isDay) ? null
																					: ((k.length && k.length > 1) ? k[1]
																							: null),
																			(m.isDay) ? null
																					: k[0])
														}
													}
												})
							}
						});
		var d = $(sSelTar + ".newcalendar").length;
		$(sSelTar + ".newcalendar")
				.each(
						function() {
							if ($(".calendarTill", this).length) {
								e.rebuildCalendarTable($(".calendarTill table",
										this).get(0), true, e.viewDateTill
										.getMonth() + 1, e.viewDateTill
										.getFullYear())
							}
							if (d > 1) {
								e.rebuildCalendarTable($("table", this).get(0),
										false, e.viewDateFrom.getMonth() + 1,
										e.viewDateFrom.getFullYear())
							}
							e.calendars.push(this);
							$(this)
									.bind(
											"changed_date",
											function(g, f, j) {
												if ($(".calendarTill", this).length) {
													if (e.till.month != null
															&& e.till.year != null) {
														e
																.rebuildCalendarTable(
																		$(
																				".calendarTill table",
																				this)
																				.get(
																						0),
																		true,
																		e.till.month,
																		e.till.year);
														var h = (e.till.day) ? e.till.day
																: 1;
														e.viewDateTill = new Date(
																e.till.year
																		+ "/"
																		+ e.till.month
																		+ "/"
																		+ h
																		+ " 00:00:00")
													}
												}
												if (e.from.month != null
														&& e.from.year != null) {
													if (d > 1) {
														e
																.rebuildCalendarTable(
																		$(
																				"table",
																				this)
																				.get(
																						0),
																		false,
																		e.from.month,
																		e.from.year)
													}
													var h = (e.from.day) ? e.from.day
															: 1;
													e.viewDateFrom = new Date(
															e.from.year
																	+ "/"
																	+ e.from.month
																	+ "/"
																	+ h
																	+ " 00:00:00")
												}
												e.updateLabels()
											});
							$("td", this)
									.bind(
											"click",
											function() {
												if (parseInt($(this).text()) > 0) {
													if ($("a", this).length) {
														if ($(this)
																.parents(
																		".calendarTill").length) {
															if (booking.env.b_action == "hotel"
																	&& booking.env.b_site_experiment_new_change_dates_hp) {
																if ($(
																		".new_change_dates .checkout_monthday")
																		.val() != $(
																		this)
																		.text()) {
																	$(
																			".new_change_dates .checkout_monthday")
																			.css(
																					{
																						"font-weight" : "bold"
																					})
																}
																if ($(
																		".new_change_dates .checkout_year_month")
																		.val() != e.viewDateTill
																		.getFullYear()
																		+ "-"
																		+ (e.viewDateTill
																				.getMonth() + 1)) {
																	$(
																			".new_change_dates .checkout_year_month")
																			.css(
																					{
																						"font-weight" : "bold"
																					})
																}
															}
															e
																	.syncDates(
																			true,
																			$(
																					this)
																					.text(),
																			e.viewDateTill
																					.getMonth() + 1,
																			e.viewDateTill
																					.getFullYear())
														} else {
															if (booking.env.b_action == "hotel"
																	&& booking.env.b_site_experiment_new_change_dates_hp) {
																if ($(
																		".new_change_dates .checkin_day")
																		.val() != $(
																		this)
																		.text()) {
																	$(
																			".new_change_dates .checkin_day")
																			.css(
																					{
																						"font-weight" : "bold"
																					})
																}
																if ($(
																		".new_change_dates .checkin_year_month")
																		.val() != e.viewDateFrom
																		.getFullYear()
																		+ "-"
																		+ (e.viewDateFrom
																				.getMonth() + 1)) {
																	$(
																			".new_change_dates .checkin_year_month")
																			.css(
																					{
																						"font-weight" : "bold"
																					})
																}
															}
															e
																	.syncDates(
																			false,
																			$(
																					this)
																					.text(),
																			e.viewDateFrom
																					.getMonth() + 1,
																			e.viewDateFrom
																					.getFullYear())
														}
														if (booking.env.b_action == "hotel"
																&& booking.env.b_site_experiment_new_change_dates_hp) {
															booking[sNSExperiments].new_change_dates_hp
																	.enable_button()
														}
														if (!booking.env.b_site_experiment_groups_number_rooms) {
															$("#define_group")
																	.show()
														}
														e.closePopupCalendar()
													}
												}
												return false
											});
							$(".nextmonth", this)
									.bind(
											"click",
											function() {
												if (!$(this).hasClass(
														"disabled")) {
													var f = $(this).parents(
															".newcalendar")
															.get(0);
													if ($(this).parents(
															".calendarTill").length) {
														e.viewDateTill = e
																.dateAfterDays(
																		e.viewDateTill,
																		0, 1);
														e
																.rebuildCalendarTable(
																		$(
																				"table",
																				f)
																				.get(
																						0),
																		true,
																		e.viewDateTill
																				.getMonth() + 1,
																		e.viewDateTill
																				.getFullYear())
													} else {
														e.viewDateFrom = e
																.dateAfterDays(
																		e.viewDateFrom,
																		0, 1);
														e
																.rebuildCalendarTable(
																		$(
																				"table",
																				f)
																				.get(
																						0),
																		false,
																		e.viewDateFrom
																				.getMonth() + 1,
																		e.viewDateFrom
																				.getFullYear())
													}
												}
												this.blur();
												return false
											});
							$(".prevmonth", this)
									.bind(
											"click",
											function() {
												if (!$(this).hasClass(
														"disabled")) {
													var f = $(this).parents(
															".newcalendar")
															.get(0);
													if ($(this).parents(
															".calendarTill").length) {
														e.viewDateTill = e
																.dateAfterDays(
																		e.viewDateTill,
																		0, -1);
														e
																.rebuildCalendarTable(
																		$(
																				"table",
																				f)
																				.get(
																						0),
																		true,
																		e.viewDateTill
																				.getMonth() + 1,
																		e.viewDateTill
																				.getFullYear())
													} else {
														e.viewDateFrom = e
																.dateAfterDays(
																		e.viewDateFrom,
																		0, -1);
														e
																.rebuildCalendarTable(
																		$(
																				"table",
																				f)
																				.get(
																						0),
																		false,
																		e.viewDateFrom
																				.getMonth() + 1,
																		e.viewDateFrom
																				.getFullYear())
													}
												}
												this.blur();
												return false
											});
							$("select", this)
									.each(
											function() {
												var f = $(this).attr("name");
												var g = $(this).val();
												if (e.calendarTypes[f]) {
													if (!e.calendarTypes[f].isDay) {
														$(this).attr("name",
																"pre_" + f);
														$(this.parentNode)
																.append(
																		'<input type="hidden" name="'
																				+ f
																				+ '" value="'
																				+ g
																				+ '" />')
													}
												} else {
													$(this)
															.change(
																	function() {
																		var h = $(
																				this)
																				.val();
																		if (h != "0") {
																			var j = h
																					.split("-");
																			if (j.length
																					&& j.length > 0) {
																				oCalendar = $(
																						this)
																						.parents(
																								".newcalendar");
																				if ($(
																						this)
																						.parents(
																								".calendarTill").length) {
																					e.viewDateTill = new Date(
																							j[0]
																									+ "/"
																									+ j[1]
																									+ "/1 00:00:00");
																					e
																							.rebuildCalendarTable(
																									$(
																											"table",
																											oCalendar)
																											.get(
																													0),
																									true,
																									j[1],
																									j[0])
																				} else {
																					e.viewDateFrom = new Date(
																							j[0]
																									+ "/"
																									+ j[1]
																									+ "/1 00:00:00");
																					e
																							.rebuildCalendarTable(
																									$(
																											"table",
																											oCalendar)
																											.get(
																													0),
																									false,
																									j[1],
																									j[0])
																				}
																			}
																		}
																	})
												}
											})
						});
		$(sSelTar + ".calendarLink").click(function() {
			e.openPopupCalendar(this);
			return false
		});
		$(sSelTar + ".calendar_close").click(function() {
			e.closePopupCalendar();
			return false
		});
		if (this.from.year != null && this.from.month != null
				&& this.from.day != null) {
			e.syncDates(false, this.from.day, this.from.month, this.from.year,
					true)
		}
		if (this.till.year != null && this.till.month != null
				&& this.till.day != null) {
			e.syncDates(true, this.till.day, this.till.month, this.till.year,
					true)
		}
	},
	updateLabels : function() {
		var d = Math.round((this.noHourDate(this.till.date) - this
				.noHourDate(this.from.date))
				/ this.oneDayInMS);
		if (d > 0) {
			if (booking.env.night && booking.env.nights) {
				var c = (d == 1) ? 1 + " " + booking.env.night
						: booking.env.nights.replace("{amount}", d);
				if (c.indexOf(d) < 0) {
					c = d + " " + c
				}
				if ($(".dayamount").length) {
					$(".dayamount").text(c)
				}
				if ($(".no_nights_helper").length) {
					$(".no_nights_helper").text("(" + c + ")")
				}
			}
		}
		if ($(".calendarFrom").length) {
			$(".calendarFrom .ct_month").text(
					booking.env.b_short_months[parseInt(this.from.month) - 1]);
			$(".calendarFrom .ct_day").text(this.from.day);
			if ($(".calendarTill").length) {
				$(".calendarTill .ct_month")
						.text(
								booking.env.b_short_months[parseInt(this.till.month) - 1]);
				$(".calendarTill .ct_day").text(this.till.day)
			}
		}
	},
	updatePrevNextLinks : function(c, d) {
		var g = this;
		var f = this.dateAfterDays(this.tomorrow, (this.maxDaysInFuture - 2));
		var e = ($(d).parents(".calendarTill").length) ? this.viewDateTill
				: this.viewDateFrom;
		$(".nextmonth", d.parentNode).each(function() {
			if (g.dateAfterDays(e, 0, 1, true) > f) {
				$(this).addClass("disabled")
			} else {
				$(this).removeClass("disabled")
			}
		});
		$(".prevmonth", d.parentNode).each(function() {
			if (g.dateAfterDays(e, 0, -1, true) < g.tomorrow) {
				$(this).addClass("disabled")
			} else {
				$(this).removeClass("disabled")
			}
		});
		g.selectOption($("select", d.parentNode), e.getFullYear() + "-"
				+ (e.getMonth() + 1))
	},
	rebuildDaySelect : function(e, c) {
		var j = "&nbsp;";
		if (c) {
			var l = this.till.month;
			var m = this.till.year;
			var g = this.till.day;
			if (g == null) {
				j = '<option style="text-transform:capitalize;" value="0">'
						+ booking.env.day + "</option>"
			}
		} else {
			var l = this.from.month;
			var m = this.from.year;
			var g = this.from.day;
			if (g == null) {
				j = '<option style="text-transform:capitalize;" value="0">'
						+ booking.env.day + "</option>"
			}
		}
		$(e).html(j);
		var n = this.getDaysInMonth(l, m);
		for ( var h = 1; h <= n; h++) {
			var d = new Date(m + "/" + l + "/" + h + " 00:00:00");
			var f = (d.getDay() > 0) ? d.getDay() - 1 : 6;
			var k = booking.env.b_simple_weekdays_for_js[f] + " " + h;
			if (booking.env.b_site_experiment_calendar_new_selectbox_switch_weekday) {
				k = h + " " + booking.env.b_simple_weekdays_for_js[f]
			}
			$(e).append(
					'<option value="' + h + '"'
							+ ((g == h) ? ' selected="selected"' : "") + ">"
							+ k + "</option>")
		}
	},
	rebuildCalendarTable : function(j, d, k, l) {
		if (j.parentNode.style.display != "none") {
			var m = parseInt(new Date(l + "/" + k + "/1").getDay()) - 2;
			if (m < 0) {
				m = 7 + m
			}
			for ( var g = 0; g < 42; g++) {
				var f = g - m;
				var c = $("tr td", j).get(g);
				if (f > 0 && f <= this.getDaysInMonth(k, l)) {
					var e = new Date(l + "/" + k + "/" + f + " 00:00:00");
					if (e < this.today || (d && e < this.tomorrow)
							|| e > this.endOfYear1
							|| (!d && e > this.endOfYear2)) {
						if (e - this.today == 0) {
							$(c).html('<span class="today">' + f + "</span>")
						} else {
							$(c).html("<span>" + f + "</span>")
						}
					} else {
						var h = "";
						if (e - this.today == 0) {
							h = "today"
						}
						if (e - this.till.date == 0) {
							h += d ? " selected" : " endsel"
						}
						if (e - this.from.date == 0) {
							h += d ? " endsel" : " selected"
						}
						if (e < this.till.date && e > this.from.date) {
							h += " inbetween"
						}
						$(c)
								.html(
										'<a href="#" class="' + h + '">' + f
												+ "</a>")
					}
				} else {
					$(c).html("&nbsp;")
				}
			}
			this.updatePrevNextLinks(true, j)
		}
	},
	noHourDate : function(d) {
		if (typeof d == "undefined") {
			var c = (this.userServDate) ? new Date(this.syncDate) : new Date()
		} else {
			if (d == null) {
				var c = (this.userServDate) ? new Date(this.syncDate)
						: new Date()
			} else {
				var c = d
			}
		}
		c.setHours(0);
		c.setMilliseconds(0);
		c.setMinutes(0);
		c.setSeconds(0);
		return c
	},
	getDaysInMonth : function(d, e) {
		var c = 31;
		if (d == 4 || d == 6 || d == 9 || d == 11) {
			c = 30
		} else {
			if (d == 2) {
				if (((e % 4) == 0) && ((e % 100) != 0) || ((e % 400) == 0)) {
					c = 29
				} else {
					c = 28
				}
			}
		}
		return (c)
	},
	selectOption : function(e, h, d) {
		var c = false;
		var g = $("option", e);
		for ( var f = 0; f < g.length; f++) {
			if (h && h != "") {
				if ($(g[f]).val() == h) {
					g[f].selected = true;
					c = true
				} else {
					g[f].selected = false
				}
			}
			if (d && d != "") {
				if ($(g[f]).text() == h) {
					g[f].selected = true;
					c = true
				} else {
					g[f].selected = false
				}
			}
		}
		return c
	},
	dateAfterDays : function(m, g, j, l) {
		var c = this.oneDayInMS * g;
		var h = 12;
		if (l) {
			m.setDate(1)
		}
		if (j) {
			var d = this.noHourDate(m);
			if (j > h || j < -1 * h) {
				m.setFullYear(m.getFullYear() + parseInt(j / h));
				j = j % h
			}
			if (j != 0) {
				var e = m.getMonth();
				if (e + j > h) {
					m.setFullYear(m.getFullYear() + 1);
					m.setMonth((e + j) - h)
				} else {
					if (e + j < 0) {
						m.setFullYear(m.getFullYear() - 1);
						m.setMonth((e + j) + h)
					} else {
						m.setMonth(e + j)
					}
				}
			}
		}
		var f = new Date((this.noHourDate(m) * 1) + c);
		if (m.getTimezoneOffset() != f.getTimezoneOffset()) {
			var k = m.getTimezoneOffset() - f.getTimezoneOffset();
			k = ((k < 0) ? ~k + 1 : k) * 60 * 1000;
			if (k > 0) {
				f = new Date((this.noHourDate(m) * 1) + c + k)
			}
		}
		return f
	},
	openPopupCalendar : function(k) {
		var m = $("#calendar_popup").get(0);
		var g = "";
		switch (k.nodeName.toLowerCase()) {
		case "a":
			g = k.href.split("#")[1];
			break;
		case "input":
			g = k.name;
			break;
		case "select":
			g = k.name;
			break;
		default:
			break
		}
		var c = Number((booking.env.b_site_experiment_calendar_with_input) ? $(
				k).outerHeight() : 0);
		var l = 10 + c;
		var j = $(k).offset().top + l;
		var h = $(k).offset().left;
		if (booking.env.rtl) {
			h = h - 211
		}
		var d = $(window).height();
		var f = $(document).scrollTop();
		var e = $(window).width();
		if (e < h + 230) {
			if (e - 230 > 0) {
				h = e - 230
			}
		}
		if (d + f < j + 230) {
			if (j - f - 250 > 0) {
				j = j - 250 - c
			} else {
				j = d + f - 250
			}
		}
		$("#calendar_popup").css({
			top : j + "px",
			left : h + "px"
		}).show();
		if (this.calendarTypes[g] && this.calendarTypes[g].isTill) {
			$(m).addClass("calendarTill");
			this.rebuildCalendarTable($("table", m).get(0), true,
					this.viewDateTill.getMonth() + 1, this.viewDateTill
							.getFullYear())
		} else {
			$(m).removeClass("calendarTill");
			this.rebuildCalendarTable($("table", m).get(0), false,
					this.viewDateFrom.getMonth() + 1, this.viewDateFrom
							.getFullYear())
		}
		if (booking.env.b_site_experiment_improve_calendar_closing) {
			$("body").bind("close_calendar", this.closeHandler)
		}
	},
	closeHandler : function() {
		booking[sNSStartupLoad].calendar.closePopupCalendar()
	},
	closePopupCalendar : function() {
		$("#calendar_popup").removeClass("calendarTill").hide();
		if (booking.env.b_site_experiment_improve_calendar_closing) {
			$("body").unbind("close_calendar", this.closeHandler)
		}
	}
};
booking[sNSStartupLoad].change_dates = {
	priority : 9,
	init : function() {
		if (typeof trigger_error_template_event_tracking != "undefined"
				&& trigger_error_template_event_tracking === true) {
			booking.google.trackEvent(booking.google.pageviewTracker,
					"Error Template (Aggregate)", b_errors);
			if (b_this_referer != "") {
				booking.google.trackEvent(booking.google.pageviewTracker,
						"Error Template (Referrer)", b_this_referer + " - "
								+ b_errors)
			}
			booking.google.trackEvent(booking.google.pageviewTracker,
					"Error Template (RequestURL)", b_this_url + " - "
							+ b_errors)
		}
		if (booking.env.b_page = "send_change_dates") {
			$("#message_changing-dates").fadeIn();
			$("#change_dates").submit(function() {
				var e = $("input[name=do]");
				var c = $("#change_dates input[name=checkin_date]").val();
				var d = $("#change_dates input[name=checkout_date]").val();
				if (c.length > 0 || d.length > 0) {
					cin_yymm = $("#checkin_year_month").val();
					cin_dd = $("#checkin_day").val();
					cin_yymmdd = cin_yymm + "-" + cin_dd;
					cout_yymm = $("#checkout_year_month").val();
					cout_dd = $("#checkout_monthday").val();
					cout_yymmdd = cout_yymm + "-" + cout_dd;
					a = c.replace(/-0/g, "-");
					b = d.replace(/-0/g, "-");
					if (a != cin_yymmdd || b != cout_yymmdd) {
						e.val("dochangedates")
					}
				}
			})
		}
	}
};
function switchDateStack(c, e) {
	var d = c;
	if ($(c).parents("div").length) {
		d = $(c).parents("div").get(0)
	}
	var f = 0;
	while (d) {
		if (d.nodeName.toLowerCase() == "div") {
			f++;
			if (f == e) {
				d.style.display = "block"
			} else {
				if (!booking.env.b_site_experiment_do_not_hide_availablity) {
					d.style.display = "none"
				}
			}
		}
		d = d.nextSibling
	}
}
function switchDateFlashDeal(c, d) {
	if (!booking.env.b_site_experiment_new_change_dates_hp) {
		$("div#editDates").css("display", "block");
		$("div#available_rooms_header1").css("display", "none")
	}
}
booking[sNSStartup].validatedate = {
	priority : 9,
	init : function() {
		$("#frm, #hotelpage_availform").submit(function() {
			return booking[sNSStartup].validatedate.validate(this)
		})
	},
	validate : function(oForm) {
		var sError = "";
		var today = new Date();
		var sErrorIsNeedDates = false;
		if (booking.env.b_site_experiment_fix_user_dates) {
			var checkUserDate = booking.env.b_current_datetime;
			syncDate = checkUserDate.replace(/-/gi, "/");
			var checkTomorrow = new Date(syncDate);
			checkTomorrow.setDate(checkTomorrow.getDate() + 1);
			if (checkTomorrow < today) {
				today = new Date(syncDate)
			} else {
				var checkYesterday = new Date(syncDate);
				checkYesterday.setDate(checkYesterday.getDate() - 1);
				if (checkTomorrow > today) {
					today = new Date(syncDate)
				}
			}
		}
		today.setHours("0");
		today.setMinutes("0");
		today.setSeconds("0");
		today.setMilliseconds("0");
		if ($("select[name=checkin_monthday]", oForm).length
				&& $("select[name=checkin_year_month]", oForm).length
				&& $("select[name=checkout_monthday]", oForm).length
				&& $("select[name=checkout_year_month]", oForm).length) {
			if ($("#availcheck:checked", oForm).length) {
				return true
			}
			var oCheckinD = $("select[name=checkin_monthday]", oForm).get(0);
			var oCheckinYM = $("select[name=checkin_year_month]", oForm).get(0);
			var oCheckoutD = $("select[name=checkout_monthday]", oForm).get(0);
			var oCheckoutYM = $("select[name=checkout_year_month]", oForm).get(
					0);
			var checkinYM = $(oCheckinYM).val();
			var checkinD = parseInt($(oCheckinD).val());
			var checkoutYM = $(oCheckoutYM).val();
			var checkoutD = parseInt($(oCheckoutD).val());
			if ((typeof checkinYM != "undefined")) {
				var checkinY = checkinYM.split("-")[0];
				var checkoutY = checkoutYM.split("-")[0];
				var checkinM = parseInt(checkinYM.split("-")[1]);
				var checkoutM = parseInt(checkoutYM.split("-")[1]);
				var checkin = new Date(checkinY, checkinM - 1, checkinD);
				var checkout = new Date(checkoutY, checkoutM - 1, checkoutD);
				if (checkinYM == "0" || checkinD == "0") {
					if (checkoutYM == "0" || checkoutD == "0") {
						sError = booking.env.to_check_availability_please_enter_your_dates_of_stay;
						if (booking.env.b_site_experiment_remove_no_dates_box) {
							sError += ' <a href="#" id="swd">'
									+ booking.env.click_here_to_search_without_dates
									+ "</a>"
						}
						sErrorIsNeedDates = true
					} else {
						sError = booking.env.please_enter_your_check_in_date
					}
				} else {
					if (checkoutYM == "0" || checkoutD == 0) {
						sError = booking.env.please_enter_your_check_out_date
					} else {
						if ((checkinY > checkoutY)
								|| ((checkinY == checkoutY) && (eval(checkinYM) < eval(checkoutYM)))
								|| ((checkinYM == checkoutYM) && (checkinD > checkoutD))) {
							sError = booking.env.error.checkout_date_not_after_checkin_date.name
						}
					}
				}
				if (sError == ""
						&& (booking.env.b_site_experiment_add_js_validation)) {
					if (checkin.getTime() < today.getTime()
							&& !(checkin.getTime() > today.getTime() - 86400005 && booking.env.b_site_experiment_fix_timezone_error)) {
						sError = booking.env.error.checkin_date_in_the_past.name
					} else {
						if ((checkout - checkin) / 86400000 > 30) {
							sError = booking.env.error.checkout_date_more_than_30_days_after_checkin.name
						} else {
							if (checkin > checkout) {
								sError = booking.env.error.checkout_date_not_after_checkin_date.name
							}
						}
					}
				}
			}
		}
		if (sError != "") {
			if ($(".dateerrors", oForm).length) {
				var errorField = $(".dateerrors", oForm).get(0);
				if (sErrorIsNeedDates) {
					$("#inout select").change(function() {
						$("#friendly_error_popup").remove()
					});
					$(".calendar").click(function() {
						$("#friendly_error_popup").remove()
					});
					$("#friendly_error_popup span.close_errormsg").live(
							"click", function() {
								$("#friendly_error_popup").remove()
							});
					$("#inout .avail, .toggle_overview, .toggle_review").live(
							"click", function() {
								$("#friendly_error_popup").remove()
							});
					if ($("#friendly_error_popup").length == 0) {
						var last_dropdown_searchbox = $("#inout select").eq(3);
						if (booking.env.b_action == "hotel"
								|| booking.env.b_action == "searchresults") {
							last_dropdown_searchbox = $(
									".leftsmall #inout select").eq(1)
						}
						if (booking.env.b_site_experiment_calendar_with_input) {
							last_dropdown_searchbox = $(
									"#inout input.check_date").eq(1)
						}
						var last_dropdown_offset = last_dropdown_searchbox
								.offset();
						var last_dropdown_hotelpage = $(
								"#hotelpage_availform select").eq(3);
						if (booking.env.b_site_experiment_calendar_with_input) {
							last_dropdown_hotelpage = $(
									"#hotelpage_availform input.check_date")
									.eq(1)
						}
						if (booking.env.nodates_popup_up) {
							last_dropdown_hotelpage = $(
									"#hotelpage_availform select").eq(0)
						}
						var last_dropdown_hotelpage_offset = last_dropdown_hotelpage
								.offset();
						var first_dropdown_searchbox = $("#inout select").eq(0);
						var first_dropdown_offset = last_dropdown_searchbox
								.offset();
						if (booking.env.no_dates_tooltip_bug) {
							var homeinPos = ($("#checkin_year_month")
									.position().top - 18);
							var nodates_popup_upRight = -255;
							if ($.browser.msie && $.browser.version === "7.0") {
								nodates_popup_upRight = -200
							}
						}
						if (booking.env.b_lang == "ar") {
							if (booking.env.no_dates_tooltip_bug) {
								var errorHTML = '<div id="friendly_error_popup" style="direction:ltr;background-position:center right;top:'
										+ homeinPos
										+ "px;left:"
										+ (nodates_popup_upRight + 50)
										+ 'px"><div class="wrapper"><span class="close_errormsg"></span><p>'
										+ booking.env.view_prices_enter_dates
										+ "</p></div></div>";
								$("#inout").css({
									position : "relative",
									"z-index" : "100"
								}).append(errorHTML)
							} else {
								var errorHTML = '<div id="friendly_error_popup" style="top:'
										+ (first_dropdown_offset.top - 20)
										+ "px;left:"
										+ (first_dropdown_offset.left - 260)
										+ 'px;"><div class="wrapper"><span class="close_errormsg"></span><p>'
										+ booking.env.view_prices_enter_dates
										+ "</p></div></div>";
								$(document.body).append(errorHTML)
							}
						} else {
							if (oForm.id == "hotelpage_availform") {
								console.info(booking.env.nodates_popup_up);
								if (booking.env.nodates_popup_up) {
									var errorHTML = '<div id="friendly_error_popup" class="hotelpage new_change_dates" style="top:'
											+ (last_dropdown_hotelpage_offset.top - 90)
											+ "px;left:"
											+ (last_dropdown_hotelpage_offset.left - 150)
											+ 'px;"><div class="wrapper"><span class="close_errormsg"></span><p>'
											+ booking.env.view_prices_enter_dates
											+ "</p></div></div>"
								} else {
									var errorHTML = '<div id="friendly_error_popup" class="hotelpage" style="top:'
											+ (last_dropdown_hotelpage_offset.top - 20)
											+ "px;left:"
											+ (last_dropdown_hotelpage_offset.left
													+ last_dropdown_hotelpage
															.width() + 10)
											+ 'px;"><div class="wrapper"><span class="close_errormsg"></span><p>'
											+ booking.env.view_prices_enter_dates
											+ "</p></div></div>"
								}
							} else {
								if (booking.env.no_dates_tooltip_bug) {
									var errorHTML = '<div id="friendly_error_popup" style="top:'
											+ homeinPos
											+ "px;right:"
											+ nodates_popup_upRight
											+ 'px"><div class="wrapper"><span class="close_errormsg"></span><p>'
											+ booking.env.view_prices_enter_dates
											+ "</p></div></div>";
									$("#inout").css({
										position : "relative",
										"z-index" : "100"
									}).append(errorHTML)
								} else {
									var errorHTML = '<div id="friendly_error_popup" style="top:'
											+ (last_dropdown_offset.top - 20)
											+ "px;left:"
											+ (last_dropdown_offset.left
													+ last_dropdown_searchbox
															.width() + 10)
											+ 'px;"><div class="wrapper"><span class="close_errormsg"></span><p>'
											+ booking.env.view_prices_enter_dates
											+ "</p></div></div>";
									$(document.body).append(errorHTML)
								}
							}
						}
					}
				} else {
					var errorHTML = '<span class="exclamation exclamation_daterrrors">&nbsp;!&nbsp;</span><p class="error errors_dateerros">'
							+ sError + "</p>";
					errorField.innerHTML = errorHTML;
					errorField.style.display = "block"
				}
				$("#swd").click(function() {
					document.getElementById("availcheck").checked = "checked";
					document.getElementById("frm").submit();
					return false
				});
				return false
			} else {
				return true
			}
		} else {
			return true
		}
	}
};
function noDatesPopup(c) {
	if (document.getElementById("checkin_day").value == 0
			|| document.getElementById("checkin_year_month").value == 0
			|| document.getElementById("checkout_monthday").value == 0
			|| document.getElementById("checkout_year_month").value == 0) {
		document.location = document.location + "#top";
		alert(c)
	} else {
		document.getElementById("availcheck").checked = false;
		document.getElementById("frm").submit()
	}
}
var $_dot_or_comma = {
	USD : ".",
	EUR : ",",
	BRL : ",",
	CAN : ",",
	RUB : ","
};
var $_decimal_by_lang = {
	ca : $_dot_or_comma,
	cs : $_dot_or_comma,
	da : $_dot_or_comma,
	de : $_dot_or_comma,
	el : $_dot_or_comma,
	en : {},
	es : $_dot_or_comma,
	es_us : {},
	es_mx : {},
	fi : $_dot_or_comma,
	fr : $_dot_or_comma,
	hu : $_dot_or_comma,
	it : $_dot_or_comma,
	ja : {},
	nl : $_dot_or_comma,
	no : $_dot_or_comma,
	pt : $_dot_or_comma,
	pl : $_dot_or_comma,
	ro : $_dot_or_comma,
	ru : $_dot_or_comma,
	sv : $_dot_or_comma,
	tr : $_dot_or_comma,
	zh : {}
};
var lang, currency, country;
var original_persons_count = null;
$(function() {
	lang = $("html").attr("lang");
	currency = $("#currList").val();
	country = $("meta[name=country]").attr("content");
	$(".bookExtra").show();
	if (original_persons_count == null) {
		original_persons_count = parseInt($("#person_count").text());
		if (isNaN(original_persons_count)) {
			original_persons_count = parseInt($(".person_count:first").text())
		}
	}
	$("select.number_guests").change(function() {
		var h = $(this);
		var f = h.val();
		if (booking.env.b_site_experiment_one_page_bookprocess) {
			var g = h.parents(".room_item").find(".addon")
		} else {
			var g = h.parents("table:first").find(".addon")
		}
		var j;
		g.each(function() {
			var t = $(this);
			var o = t.find(".number_guests");
			o.html(f);
			var k = o.length ? f : 1;
			var r = t.find(".price_per_unit");
			var m = r.attr("price");
			var u = r.attr("price_hotel");
			var l = t.find("span.addon_price");
			var v = t.find(".number_nights").text() || r.attr("nights") || 1;
			var n = t.find("span.addon_price");
			var q = ((m > 0) ? m : u) * v * k;
			n.html(n.attr("currency") + format_price(q));
			n.attr("price", q);
			n.attr("price_hotel", format_price(u * v * k))
		});
		show_addons_cost();
		update_persons_count()
	});
	$("tr.dropdowns td select").change(function() {
		var l = $(this);
		var g = $(this).parents("tr.dropdowns").find(".price_per_unit");
		var j = l.find("option:selected").text();
		var k = g.attr("nights");
		var m = g.attr("price");
		var f = g.attr("price_hotel");
		var h = ((m > 0) ? m : f) * k * j;
		l.attr("price", h);
		l.attr("price_hotel", format_price(f * k * j));
		show_addons_cost()
	});
	$("input:checkbox[name^=addon]").click(show_addons_cost);
	$(".extrabed").click(function() {
		$("select.number_guests").trigger("change")
	});
	$("input:checkbox[name^=insurance]")
			.click(
					function() {
						var k = 1 * ($("#cost_with_addons").attr("tc") || 0);
						var f = 1 * (this.checked ? ($("#insurance_cost").attr(
								"price") || 0) : 0);
						var j = $("#selected_currency_symbol").text();
						$("#cost_with_addons").html(format_price(k + f));
						if (j) {
							var h = 1 * $("#s_cost_with_addons").attr("tc");
							var g = 1 * (this.checked ? ($("#s_insurance_cost")
									.attr("price") || 0) : 0);
							$("#s_cost_with_addons").html(format_price(h + g))
						}
						if (this.checked) {
							$("#insurance_div").show();
							$(".ovTotalCost").show()
						} else {
							$("#insurance_div").hide()
						}
					});
	var e = {
		nl : 1,
		dk : 1,
		fi : 1,
		se : 1,
		de : 1,
		it : 1,
		ch : 1,
		pt : 1,
		at : 1,
		es : 1,
		de : 1,
		fr : 1,
		ie : 1,
		be : 1,
		cy : 1,
		cz : 1,
		ee : 1,
		hu : 1,
		gr : 1,
		lv : 1,
		lt : 1,
		lu : 1,
		no : 1,
		pl : 1,
		sk : 1,
		ro : 1
	};
	$("select[name=cc1]").change(function() {
		var f = $(this).val();
		if (e[f] == 1) {
			$("#insurance_wrapper").show();
			$("input:checkbox[name^=insurance]").removeAttr("disabled")
		} else {
			$("#insurance_wrapper").hide();
			$("input:checkbox[name^=insurance]").attr("disabled", "disabled")
		}
	});
	$("tr.dropdowns .totPrice select").trigger("change");
	var c = $("input:checkbox[name^=addon]:checked").length;
	var d = $(".dropdowns select .notnull:selected").length;
	if (c || d) {
		show_addons_cost()
	}
	if (e[$("select[name=cc1] option:selected").val()] == 1) {
		$("#insurance_wrapper").show();
		$("input:checkbox[name^=insurance]").removeAttr("disabled")
	}
});
function show_addons_cost() {
	var h = $(
			"input:checkbox[name^=f_addon]:checked, input:checkbox[name^=addon]:checked, select.addon_price option.notnull:selected")
			.parents("tr.addon").find(".addon_price");
	var k = 0, o = 0;
	var d = {
		city_tax : 0,
		vat : 0,
		service_charge : 0
	};
	var m = {
		city_tax : 0,
		vat : 0,
		service_charge : 0
	};
	h.each(function() {
		var r = $(this);
		d.addons = d.addons || 0;
		d.addons += 1 * r.attr("price_hotel");
		m.addons = m.addons || 0;
		m.addons += 1 * r.attr("price");
		r.nextAll(".addon_tax").each(function() {
			var u = $(this);
			var t = u.attr("name");
			var v = 1 * u.val();
			if (t.match(/^s_/)) {
				t = t.replace(/^s_/, "");
				m[t] = m[t] || 0;
				m[t] += v
			} else {
				d[t] = d[t] || 0;
				d[t] += v
			}
		});
		r.nextAll(".addon_tax_percentage").each(function() {
			var v = $(this);
			var u = v.attr("name");
			var t = 1 * v.val();
			d[u] = d[u] || 0;
			d[u] += t * r.attr("price_hotel");
			m[u] = m[u] || 0;
			m[u] += t * r.attr("price")
		})
	});
	var j = 1 * ($("#total_cost").attr("price") || 0);
	var l = j;
	for ( var g in d) {
		var e = $("#" + g + "_cost");
		var f = 1 * (e.attr(g) || 0);
		var q = f + d[g];
		j += q;
		e.html(format_price(q))
	}
	$("#cost_with_addons").html(format_price(j));
	var c = $("#selected_currency_symbol").text();
	if (c) {
		var n = 1 * ($("#s_total_cost").attr("price") || 0);
		for ( var g in m) {
			var e = $("#s_" + g + "_cost");
			var f = 1 * (e.attr(g) || 0);
			var q = f + m[g];
			n += q;
			e.html(format_price(q))
		}
		$("#s_cost_with_addons").html(format_price(n))
	}
	if (booking.env.b_site_experiment_extracharges_breakdown) {
		if (d.addons > 0) {
			$(".cost").show();
			$(".ovTotalCost").show();
			$("#rack-rate-total-user-currency").hide();
			$("#rack-rate-total-hotel-currency").hide();
			$("#rack-rate-total-percentage").hide()
		} else {
			$(".cost").hide();
			$("#rack-rate-total-user-currency").show();
			$("#rack-rate-total-hotel-currency").show();
			$("#rack-rate-total-percentage").show();
			if ($(".included", "#pricedetails").length < 2) {
				if (l == j) {
					$(".ovTotalCost").hide();
					$("#rack-rate-total-user-currency").show();
					$("#rack-rate-total-hotel-currency").show();
					$("#rack-rate-total-percentage").show()
				} else {
					$(".ovTotalCost").show();
					$("#rack-rate-total-user-currency").hide();
					$("#rack-rate-total-hotel-currency").hide();
					$("#rack-rate-total-percentage").hide()
				}
			}
		}
	} else {
		if (d.addons > 0) {
			$(".cost").show();
			$(".ovTotalCost").show();
			$("#rack-rate-total-user-currency").hide();
			$("#rack-rate-total-hotel-currency").hide();
			$("#rack-rate-total-percentage").hide()
		} else {
			$(".cost").hide();
			$("#rack-rate-total-user-currency").show();
			$("#rack-rate-total-hotel-currency").show();
			$("#rack-rate-total-percentage").show();
			if (l == j) {
				$(".ovTotalCost").hide();
				$("#rack-rate-total-user-currency").show();
				$("#rack-rate-total-hotel-currency").show();
				$("#rack-rate-total-percentage").show()
			} else {
				$(".ovTotalCost").show();
				$("#rack-rate-total-user-currency").hide();
				$("#rack-rate-total-hotel-currency").hide();
				$("#rack-rate-total-percentage").hide()
			}
		}
	}
	if ($(".extrabed :checked").length) {
		$("#extrabed_remark").show();
		$(".extrabed_var_is_included").show();
		$(".extrabed_var_is_excluded").hide()
	} else {
		$("#extrabed_remark").hide();
		$(".extrabed_var_is_included").hide();
		$(".extrabed_var_is_excluded").show()
	}
	if ($("li.total").hasClass("updated")) {
		$("li.total").removeClass("updated")
	} else {
		$("li.total").addClass("updated").delay(600).queue(function(r) {
			$(this).removeClass("updated");
			r()
		})
	}
}
function update_persons_count() {
	var c = 0;
	$("select.number_guests").each(function() {
		c += parseInt($(this).val())
	});
	$("input[type=checkbox].is_extrabed:checked").each(function() {
		c += 1
	});
	var d = $("#person_count");
	if (d.length == 0) {
		d = $(".person_count");
		var e = "";
		d.each(function() {
			e = $(this).text().replace(/[0-9]+/, c);
			$(this).html(e)
		})
	} else {
		var e = d.text().replace(/[0-9]+/, c);
		d.html(e)
	}
}
function format_price(f) {
	var e = (Math.round(f * 100) / 100) + "";
	if (e.match(/\.\d$/)) {
		e += "0"
	}
	var d = country.toLowerCase();
	var g = $_decimal_by_lang[lang + "_" + d] || $_decimal_by_lang[lang];
	var c = g ? g[currency] || "." : ".";
	return e.replace(/\./, c)
}
booking[sNSStartup].addons = {
	priority : 9,
	init : function() {
		$("#insurance_button").click(function() {
			$(this).toggleClass("hover");
			$("#insurance_panel").toggle()
		});
		return true
	}
};
booking[sNSExperiments].free_cancellation_fake_addon = {
	priority : 9,
	init : function() {
		$(".free-cancellation input").removeAttr("checked");
		$(".free-cancellation input")
				.click(
						function() {
							var k = $(this).attr("name").split("_");
							var m = $(this).attr("value");
							var g = k[2] + "_" + k[3] + "_" + k[4];
							var c = $("input[name='nr_rooms_" + g + "']").attr(
									"value");
							var e = $("input[name='nr_rooms_" + m + "']").attr(
									"value");
							var l;
							var h;
							var f = $("#bookForm input[name='total_cost']");
							var d = parseFloat(f.attr("value"));
							var j = parseFloat($(this).parents("tr.addon")
									.find(".addon_price").attr("price_hotel"));
							if (this.checked) {
								$("input[name='nr_rooms_" + g + "']").attr(
										"value", --c);
								$("input[name='nr_rooms_" + m + "']").attr(
										"value", ++e);
								l = g;
								h = m;
								d += j
							} else {
								$("input[name='nr_rooms_" + g + "']").attr(
										"value", ++c);
								$("input[name='nr_rooms_" + m + "']").attr(
										"value", --e);
								l = m;
								h = g;
								d -= j
							}
							f.attr("value", d);
							var n = $(this).parents(".bookstep2").get(0);
							console.info(n);
							$("input", n).each(
									function() {
										if ($(this).attr("name").indexOf(
												"f_addon") < 0) {
											$(this).attr(
													"name",
													$(this).attr("name")
															.replace(l, h));
											$(this).attr(
													"id",
													$(this).attr("id").replace(
															l, h))
										}
									});
							$("select", n).each(
									function() {
										$(this).attr(
												"name",
												$(this).attr("name").replace(l,
														h));
										$(this).attr(
												"id",
												$(this).attr("id")
														.replace(l, h))
									});
							show_addons_cost()
						});
		return true
	}
};
booking.ajaxSearch2 = (function() {
	var f = "=!=!=";
	var t = false;
	var h;
	var n = {};
	var q;
	var x;
	var l = [];
	var z = function(B, C) {
		n[B] = {
			timestamp : +new Date(),
			value : C
		}
	};
	var A = function(C) {
		var D = n[C];
		var B = +new Date();
		if (D && (B - D.timestamp) < 600000) {
			return D.value
		}
	};
	var w = function() {
		var C = $(".sorth1").offset().top;
		var B = $(window).scrollTop();
		if (B > C) {
			window.scrollTo(0, C)
		}
	};
	var j = function(B) {
		if (typeof history.pushState !== "undefined") {
			history.pushState({
				url : B
			}, null, B)
		} else {
			location.hash = "#!" + B
		}
	};
	var o = function() {
		var D = $(window);
		var F = D.height();
		var C = D.scrollTop();
		var E = h.height();
		var B = (E < F) ? (F - E) / 2 : 0;
		h.css("top", Math.round(C + B))
	};
	var d = function(B, J) {
		var I = B.replace(booking.env.b_url_start, "").replace(/;;/g, ";")
				.replace(/^;+|;+$/g, "").split("?");
		var F = I[1].split(";");
		var G, H = F.length;
		var D, C, E = [];
		for (G = 0; G < H; G++) {
			D = F[G].split("=");
			if (D[0] === "nflt") {
				C = decodeURIComponent(D[1]).replace(/;;/g, ";").replace(
						/^;+|;+$/g, "");
				if (C) {
					E = C.split(";")
				}
				F.splice(G, 1);
				break
			}
		}
		if (typeof J === "function") {
			J(F, E)
		}
		F.push("nflt=" + encodeURIComponent(E.sort().join(";")));
		return I[0] + "?" + F.sort().join(";")
	};
	var g = function(C) {
		var B = C.split("=")[0];
		return d(x, function(E, D) {
			if (B === "pr") {
				r(C, E)
			} else {
				D.push(C);
				if (B === "district") {
					v(E)
				}
			}
		})
	};
	var r = function(G, F) {
		var D, C = F.length;
		var E = false;
		var B;
		for (D = 0; D < C; D++) {
			if (F[D].split("=")[0] === "pr") {
				E = true;
				B = G.split("=")[1] + "," + F[D].split("=")[1];
				B = B.split(",");
				B = $.map(B, function(H) {
					return parseInt(H, 10)
				});
				B.sort(function(I, H) {
					return I - H
				});
				if (B[0] === -1) {
					B.splice(0, 1);
					B.push(-1)
				}
				F[D] = "pr=" + B[0] + "," + B[B.length - 1];
				break
			}
		}
		if (!E) {
			F.push(G)
		}
	};
	var k = function(C) {
		var B = C.split("=")[0];
		return d(x, function(F, E) {
			if (B === "pr") {
				m(C, F)
			} else {
				var D = E.length;
				while (D--) {
					if (E[D] === C) {
						E.splice(D, 1)
					}
				}
				if (B === "district") {
					c(F)
				}
			}
		})
	};
	var m = function(D, F) {
		var G, H = F.length;
		for (G = 0; G < H; G++) {
			if (F[G].split("=")[0] === "pr") {
				var K = F[G].split("=")[1].split(",");
				var C = parseInt(K[0], 10);
				var B = parseInt(K[1], 10);
				var E = D.split("=")[1].split(",");
				var J = parseInt(E[0], 10);
				var I = parseInt(E[1], 10);
				if (C === J && B === I) {
					F.splice(G, 1)
				} else {
					if (C === J) {
						F[G] = "pr=" + I + "," + B
					} else {
						if (B === I) {
							F[G] = "pr=" + C + "," + J
						}
					}
				}
				break
			}
		}
	};
	var v = function(B) {
		c(B);
		B.push("radius=0")
	};
	var c = function(C) {
		var B = C.length;
		while (B--) {
			if (/^radius=/.test(C[B])) {
				C.splice(B, 1)
			}
		}
	};
	var e = function(F, C, B) {
		var E = F.split(f);
		if ($(E[2]).find("table.hotellist > tbody > tr").length === 0) {
			var G = l.pop();
			if (G) {
				y(G, {
					scrollToTop : false,
					saveUrl : false
				});
				return false
			}
		}
		$(document.body).unbind("mousemove.tooltip");
		l = [];
		var H = [];
		$("#filterbox_wrap .filtercategory").each(function() {
			var I = $(this);
			if (!I.hasClass("toggla_hide")) {
				H.push(I.parent().attr("id"))
			}
		});
		$("#filterbox_wrap").html(E[0]);
		$.each(H, function(J, I) {
			var K = $("#" + I);
			K.find(".filtercategory").removeClass("toggla_hide");
			K.find(".filteroptions").hide()
		});
		$("h1.sorth1").html(E[1]);
		var D = document.getElementById("ajaxsrwrap");
		$(D).html(E[2]);
		booking[sNSStartupLoad].tooltip_3.addTooltip(D);
		booking[sNSStartupLoad].search_all_roomtypes.addMoreLink(D);
		booking[sNSStartup].filterbox.init();
		booking[sNSStartup].sort_popups.init();
		if (booking.env.b_site_experiment_pin_sortbar) {
			booking[sNSExperiments].pin_sortbar.init()
		}
		$(
				".address a, #enlargeSelection a, .prevnextbar a, a.filterelement, #sort_by a")
				.each(function() {
					if (this.href.indexOf("standalonesearchresults.") > -1) {
						this.href = this.href.replace("standalone", "")
					}
				});
		if (!B) {
			B = {}
		}
		if (B.scrollToTop === undefined || B.scrollToTop) {
			w()
		}
		if (B.saveUrl === undefined || B.saveUrl) {
			j(C)
		}
	};
	var y = function(C, B) {
		var D = A(C);
		x = C;
		if (D) {
			e(D, C, B);
			return
		}
		t = true;
		h.show();
		if ($.browser.msie && $.browser.version === "6.0") {
			o()
		}
		setTimeout(function() {
			q = $.ajax({
				cache : true,
				url : C.indexOf("standalonesearchresults") > -1 ? C : C
						.replace("searchresults.", "standalonesearchresults."),
				success : function(E) {
					if (C !== x) {
						return
					}
					h.hide();
					t = false;
					e(E, C, B);
					z(C, E)
				}
			})
		}, 15)
	};
	var u = function() {
		h = document.getElementById("ajaxoverlay2") ? $("#ajaxoverlay2") : $(
				'<div id="ajaxoverlay2"><div id="ajaxoverlay2_inner">'
						+ booking.env.loading_your_search + "</div></div>")
				.hide().appendTo(document.body);
		z(location.pathname + location.search, $("#filterbox_wrap").html() + f
				+ $("h1.sorth1").html() + f + $("#ajaxsrwrap").html());
		var B = location.href.split("#!")[1];
		if (B) {
			y(B, {
				scrollToTop : false,
				saveUrl : false
			})
		}
		$(".prevnextbar a").live("click", function() {
			var C = d(this.href);
			y(C);
			return false
		});
		$("a.filterelement").live(
				"click",
				function() {
					var E = $(this);
					if (E.hasClass("cantdeselect")) {
						return false
					}
					var F = this.getAttribute("data-id").replace(
							/^(.+)[\-_](\d+)$/, "$1=$2");
					if (/^pricerange=/.test(F)) {
						F = this.getAttribute("data-param")
					}
					var D = F.split("=")[0];
					var C;
					if (t) {
						h.hide();
						t = false;
						if (q) {
							q.abort()
						}
						if (x) {
							l.push(x)
						}
						C = E.hasClass("active") ? k(F) : g(F)
					} else {
						C = d(this.href)
					}
					if (booking.env.filter_config[D] === "single") {
						E.siblings().toggle(E.hasClass("active"))
					}
					E.removeClass("on").toggleClass("active").blur();
					y(C, {
						scrollToTop : false
					});
					return false
				});
		$("#sort_by :not(.with_dd) > a").live("click", function() {
			var C = d(this.href);
			y(C);
			return false
		});
		$(window).bind("hashchange", function() {
			var C = location.href.split("#!")[1];
			if (!C) {
				y(location.pathname + location.search, {
					saveUrl : false
				})
			} else {
				if (C !== x) {
					y(C, {
						saveUrl : false
					})
				}
			}
		});
		$(window).bind("popstate", function(C) {
			var D = C.originalEvent.state;
			if (!D) {
				y(location.pathname + location.search, {
					saveUrl : false
				})
			} else {
				if (D.url !== x) {
					y(D.url, {
						saveUrl : false
					})
				}
			}
		})
	};
	return {
		init : u
	}
}());
booking[sNSExperiments].ajaxsearch2 = {
	init : function() {
		booking.ajaxSearch2.init()
	}
};
booking[sNSExperiments].upd_concurrent_users = {
	priority : 9,
	updList : [],
	visitingPages : {},
	runList : [],
	updateSteps : 4,
	updConcurrentUsers : "",
	showConcurrentUsers : "",
	init : function() {
		var d = 10000;
		var c = $(".updvisitors");
		for (items in c) {
			var e = c[items].className;
			if (e) {
				if (e.indexOf("crh_") > -1) {
					nClass = e.split("crh_")[1];
					this.updList.push(nClass)
				}
			}
		}
		if (this.updList.length > 0) {
			this.updConcurrentUsers = window.setInterval(function() {
				booking[sNSExperiments].upd_concurrent_users.updUsers()
			}, d);
			this.showConcurrentUsers = window.setInterval(function() {
				booking[sNSExperiments].upd_concurrent_users.delayUpdate()
			}, (d / (this.updList.length - 1)));
			booking[sNSExperiments].upd_concurrent_users.updUsers()
		}
	},
	updUsers : function() {
		var c = this;
		$.ajax({
			url : "/hotel_visitors?hotels=" + this.updList.join(","),
			cache : false,
			success : function(e) {
				if (e.visitors) {
					c.visitingPages.visitors = e.visitors;
					for ( var d = 0; d < c.updList.length; d++) {
						if (!c.visitingPages.visitors[c.updList[d]]) {
							c.visitingPages.visitors[c.updList[d]] = 0
						}
						c.runList.splice(Math.floor(Math.random()
								* c.runList.length), 0, c.updList[d])
					}
				}
				c.updateSteps--
			},
			error : function() {
				c.updateSteps--
			}
		});
		if (this.updateSteps == 0) {
			window.clearInterval(this.updConcurrentUsers)
		}
	},
	delayUpdate : function() {
		var c = booking[sNSExperiments].upd_concurrent_users;
		var f = this.runList.shift();
		if (this.visitingPages.visitors) {
			var e = this.visitingPages.visitors[f]
		}
		var d = 500;
		if (e != undefined) {
			$(".crh_" + f)
					.each(
							function() {
								var j = this;
								var h = parseInt($("span", j).text());
								var g = "green";
								if (h != e) {
									if (h == 0 && e > 0) {
										$(j.parentNode.parentNode).show("slow")
									}
									if (e == 0 || h > e) {
										g = "red"
									}
									$("span", j)
											.animate(
													{
														backgroundColor : g,
														fontSize : "1.5em"
													},
													d,
													function() {
														$("span", j).text(e);
														if (e == 1) {
															$(j.parentNode)
																	.removeClass(
																			"show_visitors");
															$(
																	".one_visitor",
																	j.parentNode.parentNode)
																	.addClass(
																			"show_visitors")
														} else {
															if (h == 1) {
																$(j.parentNode)
																		.addClass(
																				"show_visitors");
																$(
																		".one_visitor",
																		j.parentNode.parentNode)
																		.removeClass(
																				"show_visitors")
															} else {
																if (!$(
																		j.parentNode)
																		.hasClass(
																				"show_visitors")) {
																	$(
																			j.parentNode)
																			.addClass(
																					"show_visitors")
																}
															}
															if ($(
																	".hot_image",
																	j.parentNode)
																	.hasClass(
																			"is_hot")) {
																if (e < 10) {
																	$(
																			".hot_image",
																			j.parentNode)
																			.removeClass(
																					"is_hot")
																}
															} else {
																if (e > 9) {
																	$(
																			".hot_image",
																			j.parentNode)
																			.addClass(
																					"is_hot")
																}
															}
															if (e > 99) {
																$(j)
																		.css(
																				"padding-right",
																				"23px")
															} else {
																if (e > 9) {
																	$(j)
																			.css(
																					"padding-right",
																					"16px")
																} else {
																	$(j)
																			.css(
																					"padding-right",
																					"9px")
																}
															}
														}
														$("span", j)
																.animate(
																		{
																			backgroundColor : "white",
																			fontSize : "1em"
																		},
																		d,
																		function() {
																			if (e == 0) {
																				$(
																						j.parentNode.parentNode)
																						.hide(
																								"fast");
																				$(
																						j.parentNode)
																						.removeClass(
																								"show_visitors");
																				$(
																						".one_visitor",
																						j.parentNode.parentNode)
																						.removeClass(
																								"show_visitors")
																			}
																			if ($(
																					"span",
																					j).length) {
																				var k = $(
																						"span",
																						j)
																						.get(
																								0);
																				k.style.backgroundColor = "transparent"
																			}
																		})
													})
								}
							})
		} else {
			if (c.updateSteps < 1) {
				window.clearInterval(c.showConcurrentUsers)
			}
		}
	}
};
var b_Feedback = function() {
	function g() {
		if (b_cookie && b_cookie.contentFeedback) {
			var k = b_cookie.contentFeedback.split("|");
			if (k.indexOf(booking.env.b_hotel_id) != -1) {
				return
			}
		}
		$("#hotel_main_content").append(
				'<p id="content_feedback_invite">'
						+ booking.env.content_feedback_prompt_question
						+ '<br /><button id="b_content_feedback_yes">'
						+ booking.env.content_feedback_prompt_link
						+ "</button></p>");
		$("#b_content_feedback_yes")
				.click(
						function() {
							b_Feedback
									.popup("/general.html?tmpl=content_feedback");
							if (booking.env.b_site_experiment_event_tracking
									&& (typeof pageTracker != "undefined" || typeof _gaq != "undefined")) {
								booking.google.trackEvent(
										booking.google.clickTracker,
										"Content Feedback", "Clicked")
							}
							return false
						})
	}
	function h() {
	}
	function f() {
		var l = "<option value=''>" + transl_please_select + "</option>";
		var k;
		$(
				"#maxotel_rooms td.roomPrice div.roomDefaultUse, #maxotel_rooms td.roomPrice div.roomSingleUse")
				.each(
						function() {
							singleOcc = "";
							if ($(this).hasClass("roomSingleUse")) {
								singleOcc = "- Single Occupancy"
							}
							var n = $(this).find("strong").text();
							var m = n.match(/[0-9].*[0-9]/);
							if ($(this).parents("tr:eq(0)").find(
									"td.roomType a.togglelink").length != 0) {
								k = $(this).parents("tr:eq(0)").find(
										"td.roomType a.togglelink").html()
							}
							l += '<option value="'
									+ $(this).attr("id").substr(9) + " *** "
									+ k + singleOcc + " | "
									+ booking.env.rates_feedback_userscurrency
									+ " " + m + '">' + k + singleOcc + " - "
									+ n + "</option>"
						});
		$("#feedback_roomslist").append(
				'<select name="roomtype_id" id="roomtype_id" style="width:410px;">'
						+ l + "</select>")
	}
	function e() {
		if ($("#comments_table").length) {
			var l = $("#comments_table");
			$(".review_tr", l).mouseenter(function(m) {
				$(".review_feedback", $(this)).css({
					filter : "alpha(opacity=100)",
					opacity : 1
				})
			});
			$(".review_tr", l).mouseleave(function(m) {
				$(".review_feedback", $(this)).css({
					filter : "alpha(opacity=20)",
					opacity : 0.2
				})
			});
			$(".review_useful_form", l).tooltip({
				track : true,
				opacity : 1,
				fade : 250,
				left : 0
			});
			if (b_cookie && b_cookie.rF) {
				var k = b_cookie.rF.split(",");
				$("tr", l)
						.each(
								function() {
									var n = $(this).find(
											"div[id^='area_comments_']").attr(
											"id");
									var m = n.substr(14, n.length);
									if (k.indexOf(m) != -1) {
										var o = $(this);
										o.find(".review_useful_form").remove();
										o
												.find("div.rf_question")
												.prepend(
														'<p class="review_useful_thankyou">'
																+ transl_content_feedback_thankyou_short
																+ "</p>")
									}
								})
			}
			$("div.review_feedback form", l).submit(
					function() {
						$(this).children("textarea")
								.val(booking.env.b_hotel_id);
						var n = $(this).parents("div[id^='area_comments_']")
								.attr("id");
						var m = n.substr(14, n.length);
						var o = this;
						$.post(this.action, {
							hotel_id : $(this).children("textarea").val()
						}, function() {
							if (b_cookie && b_cookie.rF) {
								var r = b_cookie.rF.split(",");
								if (r.length > 50) {
									r.shift();
									b_cookie.rF = r.toString() + "," + m
								} else {
									b_cookie.rF += "," + m
								}
							} else {
								if (typeof (b_cookie) == "undefined") {
									b_cookie = {}
								}
								b_cookie.rF = m
							}
							if (typeof (JSON) != "undefined") {
								$.cookie("b", JSON.stringify(b_cookie), {
									expires : 30,
									path : "/",
									domain : booking.env.b_domain_end
								})
							}
							var q = $(o).parent();
							q.find(".review_useful_form").remove();
							q.prepend('<p class="review_useful_thankyou">'
									+ transl_content_feedback_thankyou_short
									+ "</p>");
							booking.google.trackEvent(
									booking.google.clickTracker,
									"Review Useful", $(o).children("button")
											.attr("class"))
						});
						return false
					});
			$("span.review_feedback form", l).submit(
					function() {
						$(this).children("textarea")
								.val(booking.env.b_hotel_id);
						var n = $(this).parents("div[id^='area_comments_']")
								.attr("id");
						var m = n.substr(14, n.length);
						var o = this;
						$.post(this.action, {
							hotel_id : $(this).children("textarea").val()
						}, function() {
							if (b_cookie && b_cookie.rF) {
								var r = b_cookie.rF.split(",");
								if (r.length > 50) {
									r.shift();
									b_cookie.rF = r.toString() + "," + m
								} else {
									b_cookie.rF += "," + m
								}
							} else {
								if (typeof (b_cookie) == "undefined") {
									b_cookie = {}
								}
								b_cookie.rF = m
							}
							if (typeof (JSON) != "undefined") {
								$.cookie("b", JSON.stringify(b_cookie), {
									expires : 30,
									path : "/",
									domain : ".booking.com"
								})
							}
							var q = $(o).parent();
							q.find(".review_useful_form").remove();
							q.prepend('<p class="review_useful_thankyou">'
									+ transl_content_feedback_thankyou_short
									+ "</p>");
							booking.google.trackEvent(
									booking.google.clickTracker,
									"Review Useful", $(o).children("button")
											.attr("class"))
						});
						return false
					})
		}
	}
	function d() {
		$("input[name^=reason]:checked").each(function() {
			$.ajax({
				url : "/feedback",
				type : "PUT",
				data : {
					type : this.value,
					hotel_id : booking.env.b_hotel_id,
					lang : booking.env.b_lang_for_url
				}
			})
		});
		var k = booking.env.content_feedback_thankyou_end + ". "
				+ booking.env.content_feedback_we_appreciate;
		if ($("#contact:checked").length) {
			k = booking.env.content_feedback_contact_info + " " + k
		}
		$("#content_feedback_invite").text(k);
		if (b_cookie && b_cookie.contentFeedback) {
			b_cookie.contentFeedback = b_cookie.contentFeedback + "|"
					+ booking.env.b_hotel_id
		} else {
			if (typeof (b_cookie) == "undefined") {
				b_cookie = {}
			}
			b_cookie.contentFeedback = booking.env.b_hotel_id
		}
		if (typeof (JSON) != "undefined") {
			$.cookie("b", JSON.stringify(b_cookie), {
				expires : 30,
				path : "/",
				domain : booking.env.b_domain_end
			})
		}
		if (booking.env.b_site_experiment_event_tracking
				&& (typeof pageTracker != "undefined" || typeof _gaq != "undefined")) {
			booking.google.trackEvent(booking.google.clickTracker,
					"Content Feedback", "Sent")
		}
	}
	function j() {
		$("#b_content_feedback_yes").hide();
		if ($("#content_feedback_checkboxes").length) {
			$("#content_feedback_checkboxes").show()
		} else {
			$(
					'<div id="content_feedback_checkboxes"><label for="translation"><input id="translation" type="checkbox" name="reason[]" value="translation">'
							+ booking.env.content_feedback_response1
							+ '</label><label for="difficult"><input id="difficult" type="checkbox" name="reason[]" value="difficult">'
							+ booking.env.content_feedback_response2
							+ '</label><label for="incorrect"><input id="incorrect" type="checkbox" name="reason[]" value="incorrect">'
							+ booking.env.content_feedback_response3
							+ '</label><label for="missing"><input id="missing" type="checkbox" name="reason[]" value="missing">'
							+ booking.env.content_feedback_response4
							+ '</label><label for="contact"><input id="contact" type="checkbox" name="reason[]" value="contact">'
							+ booking.env.content_feedback_response5
							+ '</label><button onclick="b_Feedback.send();">'
							+ booking.env.send_your_feedback
							+ "</button><a href=\"#\" onclick=\"$('#content_feedback_checkboxes').hide(); $('#b_content_feedback_yes').show(); return false;\">Close</a></div>")
					.appendTo("#content_feedback_invite")
		}
	}
	function c(k) {
		$(document.body).append('<div id="b_feedback"></div>');
		$("#b_feedback")
				.load(
						k,
						function() {
							if ($("#b_feedback").css("position") == "fixed") {
								$("#b_feedback")
										.css(
												"top",
												$(window).height()
														/ 2
														- $("#b_feedback")
																.height() / 2)
							} else {
								var l = (document.body.scrollTop == 0) ? (window.pageYOffset) ? window.pageYOffset
										: (document.body.parentElement) ? document.body.parentElement.scrollTop
												: 0
										: document.body.scrollTop;
								$("#b_feedback")
										.css(
												"top",
												l
														+ ($(window).height() / 2 - $(
																"#b_feedback")
																.height() / 2))
							}
							$("#b_feedback").bgiframe();
							b_Feedback.createRoomsDd()
						})
	}
	return {
		init : g,
		initRatesFeedback : h,
		createRoomsDd : f,
		registerEvent : e,
		send : d,
		open : j,
		popup : c
	}
}();
booking[sNSStartup].b_Feedback = {
	priority : 9,
	init : function() {
		b_Feedback.initRatesFeedback()
	}
};
booking.ensureNamespaceExists(sNSExperiments);
booking[sNSExperiments].content_feedback = {
	priority : 9,
	init : function() {
		b_Feedback.init()
	}
};
booking[sNSExperiments].default_group_new = {
	priority : 9,
	user_modified : false,
	group_set : $(".group_set").length,
	init : function() {
		if (booking.env.b_site_experiment_groups_number_rooms) {
			function f(m) {
				if (m == "notshowing") {
					$("#clear_group_spec").hide();
					$("#group_spec").show()
				} else {
					if (m == "showing") {
						$("#clear_group_spec").show();
						$("#group_spec").hide()
					}
				}
			}
			function h() {
				f("showing");
				$("#define_group").show()
			}
			function d() {
				$(".default_group tbody tr").slice(1).remove();
				$("select[name=group_adults]")[0].value = 2;
				$("select[name=group_children]")[0].value = 0;
				if ($(".index.landing").length > 0) {
					f("notshowing")
				}
				$("#group_nr_rooms")[0].value = 1;
				$("#ages_header").hide();
				$("#group_definition input").remove();
				$(".index.landing #define_group").hide()
			}
			function e() {
				$("#group_nr_rooms").val($(".default_group tbody tr").length)
			}
			$("#define_group h3").remove();
			group_defined = (booking.env.b_group) ? true : false;
			if (!group_defined) {
				$("#define_group").hide();
				f("notshowing")
			} else {
				f("showing")
			}
			$("#group_spec").click(function() {
				h();
				return false
			});
			$("#clear_group_spec").click(function() {
				d();
				return false
			});
			$("#group_nr_rooms")
					.change(
							function() {
								var o = $(this).val(), r = $(".default_group tbody tr"), m = r.length;
								if (o < m) {
									r.slice(o).remove()
								} else {
									for ( var q = m + 1; q <= o; q++) {
										var n = $("#define_group tbody")
												.append(
														booking[sNSStartup].b_GroupDefinitionModule.row_markup
																.replace("XXX",
																		q));
										booking[sNSStartup].b_GroupDefinitionModule
												.addChildrenHandlers(n)
									}
								}
							});
			$("#define_group tfoot a").click(function() {
				e()
			});
			$("#define_group tbody a").live("click", function() {
				e()
			})
		} else {
			var g = this;
			$("#in_a_group, #in_a_group_narrow, #define_group h3").hide();
			$("#define_group table").addClass("hidelinks");
			function j(o, n, m) {
				if (g.group_set == 1 || m > 0 || n > parseInt(o) + 1) {
					var q = ".hidelinks";
					if (g.group_set != 1) {
						q += ", #group_definition_modal"
					}
					$(q).show()
				} else {
					$(".hidelinks").not("#group_definition_modal .hidelinks")
							.hide()
				}
			}
			$("#default_group_new_block select")
					.change(
							function() {
								var u = $("#nr_rooms").val(), v = $(
										"#nr_adults").val(), m = $(
										"#nr_children").val(), w = $(".default_group tbody tr"), q = w.length;
								if (u < q) {
									w.slice(u).remove();
									g.user_modified = false
								} else {
									for ( var o = q + 1; o <= u; o++) {
										var r = $("#define_group tbody")
												.append(
														booking[sNSStartup].b_GroupDefinitionModule.row_markup
																.replace("XXX",
																		o));
										booking[sNSStartup].b_GroupDefinitionModule
												.addChildrenHandlers(r)
									}
								}
								if (g.user_modified === false) {
									$("select[name=group_adults]").each(
											function(x) {
												this.value = (x < v % u) ? Math
														.floor(v / u) + 1
														: Math.floor(v / u)
											});
									$("select[name=group_children]")
											.each(
													function(x) {
														this.value = (x < m % u) ? Math
																.floor(m / u) + 1
																: Math.floor(m
																		/ u);
														$ages_row = $(this)
																.parent()
																.next();
														var y = $ages_row
																.find("input").length;
														if (this.value - 1 < y) {
															if (this.value > 0) {
																$ages_row
																		.find(
																				"input:gt("
																						+ (this.value - 1)
																						+ ")")
																		.remove()
															} else {
																$ages_row
																		.find(
																				"input")
																		.remove()
															}
														} else {
															for ( var x = 0; x < this.value
																	- y; x++) {
																$ages_row
																		.append(booking[sNSStartup].b_GroupDefinitionModule.age_markup)
															}
														}
													});
									if ($("input[name=age]").length === 0) {
										$("#ages_header").hide()
									} else {
										$("#ages_header").show()
									}
								} else {
									var n = v, t = m;
									$(".default_group select").each(function() {
										if (this.name == "group_adults") {
											if (n > 0) {
												n -= this.value
											} else {
												this.value = 0
											}
										} else {
											if (t > 0) {
												t -= this.value
											} else {
												this.value = 0
											}
										}
									})
								}
								j(u, v, m)
							});
			$(".default_group table select").live("change", function() {
				var n = 0, m = 0;
				$(".default_group table select").each(function() {
					if (this.name == "group_adults") {
						n += parseInt(this.value)
					} else {
						m += parseInt(this.value)
					}
				});
				$("#nr_adults").val(n);
				$("#nr_children").val(m);
				g.user_modified = true
			});
			var k = $("#nr_rooms").val(), l = $("#nr_adults").val(), c = $(
					"#nr_children").val();
			j(k, l, c)
		}
	}
};
booking[sNSStartup].b_GroupDefinitionModule = {
	row_markup : "",
	age_markup : '<input type="text" name="age" maxlength="2" size="2" autocomplete="off" />',
	attachEvents : function() {
		var c = this;
		$("#in_a_group").click(function() {
			if (this.checked) {
				$("#group_definition").show();
				$("#clear_group").val("0")
			} else {
				$("#group_definition").hide();
				$("#clear_group").val("1")
			}
		});
		$("#in_a_group_narrow").click(function() {
			if (this.checked) {
				c.showModalWindow();
				$("#clear_group").val("0")
			} else {
				$("#group_definition_modal").hide();
				$("#clear_group").val("1")
			}
		});
		$("#define_group tfoot a").click(
				function() {
					var e = $("#define_group tbody tr").length + 1;
					var d = $("#define_group tbody").append(
							c.row_markup.replace(/XXX/, e));
					$("#clear_group").val("0");
					c.addChildrenHandlers(d);
					return false
				});
		$("#define_group tbody a").live("click", function() {
			$(this).parents("tr").eq(0).remove();
			if ($("#group_definition tbody tr").length === 0) {
				$("#clear_group").val("1")
			}
			return false
		});
		$("#define_group input").live("click", function() {
			if (this.value == "?") {
				this.value = ""
			}
		});
		$("#show_modal, #show_modal_nr, #show_modal_ssb").click(function() {
			c.showModalWindow();
			return false
		});
		$("#clear_and_submit, #clear_and_submit_nr").click(function() {
			$("#clear_group").val("1");
			$("#in_a_group").attr("checked", "");
			$("#group_definition, .b_group_recommendation").hide();
			$("#frm")[0].submit();
			return false
		});
		$("#close").click(function() {
			$("#group_definition_modal").hide();
			return false
		});
		$("#frm").submit(function(d) {
			if ($("#availcheck")[0].checked) {
				return
			}
			if ($("#group_definition_modal").css("display") == "none") {
				return
			}
			var f = false;
			$("#group_definition input[name=age]").each(function() {
				if (this.value.match(/[mMkKhHlLaA]/)) {
					this.value = "0"
				}
				if (this.value.match(/\D/)) {
					this.value = ""
				}
				if (this.value > 17) {
					this.value = ""
				}
				if (this.value == "") {
					this.value = "?";
					$(this).addClass("error");
					$("#ages_header").addClass("error");
					f = true
				} else {
					$(this).removeClass("error");
					$("#ages_header").removeClass("error")
				}
			});
			if (f) {
				d.preventDefault();
				return false
			}
		});
		$("#availcheck").click(
				function() {
					if (this.checked) {
						$("#define_group input, #define_group select").attr(
								"disabled", "disabled");
						$("#define_group").addClass("disableme");
						if ($("#group_definition_modal").length) {
							$("#group_definition_modal").hide();
							$("#in_a_group_narrow").attr("checked", "")
						}
					} else {
						$("#define_group input, #define_group select")
								.removeAttr("disabled");
						$("#define_group").removeClass("disableme")
					}
				})
	},
	update : function(g) {
		var f = this;
		var e = $(g);
		var d = e.val();
		var h = e.parent().next().find("input").length;
		if (d - 1 < h) {
			if (d > 0) {
				e.parent().next().find("input:gt(" + (d - 1) + ")").remove()
			} else {
				e.parent().next().find("input").remove()
			}
		} else {
			for ( var c = 0; c < d - h; c++) {
				e.parent().next().append(f.age_markup)
			}
		}
		if ($("input[name=age]").length === 0) {
			$("#ages_header").hide()
		} else {
			$("#ages_header").show()
		}
	},
	setInitialVisibility : function() {
		if (!document.getElementById("in_a_group")
				|| document.getElementById("in_a_group").checked) {
			if (typeof $("#group_definition").show == "function") {
				$("#group_definition").show()
			}
		} else {
			$("#group_definition").hide();
			$("#clear_group").val("1")
		}
		$(".featuredRooms tbody").each(function() {
			if ($(this).find("tr").length === 0) {
				$(this).parents("tr").eq(0).remove()
			}
		})
	},
	showModalWindow : function() {
		$("#group_definition_modal").show();
		var c = (document.body.scrollTop == 0) ? (window.pageYOffset) ? window.pageYOffset
				: (document.body.parentElement) ? document.body.parentElement.scrollTop
						: 0
				: document.body.scrollTop;
		$("#group_definition_modal")
				.css(
						"top",
						c
								+ ($(window).height() / 2 - $(
										"#group_definition_modal").height() / 2));
		$("#group_definition_modal").bgiframe()
	},
	selectRecommendedRooms : function() {
		$("#roomsForm select").each(function() {
			this.value = 0
		});
		console.log(booking.env.b_room_groups);
		for ( var d = 0; d < booking.env.b_room_groups.length; d++) {
			var c = booking.env.b_room_groups[d].split(":");
			var e = $("select[name=nr_rooms_" + c[0] + "]").val();
			$("select[name=nr_rooms_" + c[0] + "]").val(
					parseInt(e) + parseInt(c[1]))
		}
		$("#roomsForm")[0].submit()
	},
	addChildrenHandlers : function(d) {
		var c = this;
		$('select[name="group_children"]', d).change(function() {
			c.update(this)
		})
	},
	init : function() {
		var c = this;
		if ($("#define_group").length) {
			this.row_markup = "<tr><th>"
					+ booking.env.group_room
					+ '&nbsp;XXX:&nbsp;</th><td><select name="group_adults"><option value="0">0</option><option value="1" selected="selected">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select></td><td class="b"><select name="group_children"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select></td><td class="b"></td><td><a href="#">'
					+ booking.env.group_remove + "</a></td></tr>";
			this.attachEvents();
			this.setInitialVisibility();
			if ($("#availcheck")[0].checked) {
				$("#define_group input, #define_group select").attr("disabled",
						"disabled");
				$("#define_group").addClass("disableme")
			}
			if ($("#define_group").css("display") == "none") {
				$("#inout select").change(function() {
					$("#define_group").show()
				})
			}
		}
		$("#select_group").click(function() {
			c.selectRecommendedRooms();
			this.blur();
			return false
		});
		$("#select_group2").click(function() {
			c.selectRecommendedRooms();
			this.blur();
			return false
		});
		this.addChildrenHandlers(document)
	}
};
booking.dockMyHotels = (function() {
	var m = [];
	var q = [];
	var u;
	var j;
	var o;
	var c;
	var r = 2;
	var h = function(y) {
		var x = '<div class="dock_hotel dock_hotel_' + y.hotel_id;
		if (y.is_favorite) {
			x += " dock_hotel_s-favorite"
		}
		x += '" data-id="'
				+ y.hotel_id
				+ '"><a href="'
				+ y.url
				+ '"><img src="'
				+ y.square40
				+ '" width="40" height="40" alt=""/></a><div class="dock_hotel_favorite"></div><div class="dock_hotel_name"><div class="dock_hotel_name_inner_1"><div class="dock_hotel_name_inner_2">'
				+ y.title
				+ '</div></div></div><div class="dock_hotel_remove">&times;</div></div>';
		return x
	};
	var n = function() {
		if (typeof b_cookie === "undefined") {
			window.b_cookie = {}
		}
		u = $(".dock");
		j = $(".dock_hotels");
		o = $(".dock_close");
		c = /(.+)\/images\/hotel$/.exec(booking.env.dock_images_url)[1];
		$.ajax({
			url : "/last_viewed_hotels",
			dataType : "json",
			success : function(z) {
				var y, x = z.length, A = "";
				for (y = 0; y < x; y++) {
					z[y].square40 = c + z[y].square40;
					z[y].url += booking.env.dock_url_params;
					A += h(z[y]);
					m.push(z[y].hotel_id.toString())
				}
				j.html(A);
				l();
				g("init");
				if (m.length < r) {
					return
				}
				if (b_cookie.dock_my_hotels === "closed") {
					o.addClass("dock_s-closed").removeClass("dock_s-hidden")
				} else {
					u.removeClass("dock_s-hidden");
					o.removeClass("dock_s-hidden")
				}
			}
		});
		j.delegate(".dock_hotel_remove", "click", function() {
			var x = $(this).parent().attr("data-id");
			w(x)
		});
		o.bind("click", function() {
			d()
		});
		$(".dock_compare_link").bind(
				"click",
				function() {
					booking.google.trackEvent(booking.google.clickTracker,
							"Dock", "Compare link clicked")
				})
	};
	var t = function(y) {
		var z = y.hotel_id;
		if ($.inArray(z, m) > -1) {
			var x = j.find(".dock_hotel_" + z);
			if (x.hasClass("dock_hotel_s-favorite")) {
				return
			} else {
				x.addClass("dock_hotel_s-favorite")
			}
		} else {
			m.unshift(z);
			j.prepend(h(y))
		}
		if (m.length >= r && u.hasClass("dock_s-hidden")) {
			f();
			b_cookie.dock_my_hotels = "open";
			v()
		}
		$.ajax({
			url : "/make_hotel_favorite",
			data : {
				hotel_id : z,
				pid : booking.env.pageview_id
			}
		});
		l();
		g("addHotel", z);
		booking.google.trackEvent(booking.google.clickTracker, "Dock",
				"Hotel added")
	};
	var w = function(z) {
		var y = $.inArray(z, m);
		if (y === -1) {
			return
		}
		m.splice(y, 1);
		var x = j.find(".dock_hotel_" + z);
		if (m.length >= r) {
			x.remove()
		} else {
			if (u.hasClass("dock_s-hidden")) {
				x.remove();
				o.addClass("dock_s-hidden")
			} else {
				k(true, function() {
					x.remove()
				})
			}
		}
		$.ajax({
			url : "/hotel_history",
			type : "DELETE",
			data : {
				hotel_id : z
			}
		});
		l();
		g("removeHotel", z);
		booking.google.trackEvent(booking.google.clickTracker, "Dock",
				"Hotel removed")
	};
	var f = function() {
		var x = o.hasClass("dock_s-hidden") ? u.add(o) : u;
		o.removeClass("dock_s-closed");
		x.css("bottom", -45).removeClass("dock_s-hidden").animate({
			bottom : 0
		}, "fast")
	};
	var k = function(y, z) {
		var x = y ? u.add(o) : u;
		x.css("bottom", 0).animate({
			bottom : -45
		}, "fast", function() {
			x.addClass("dock_s-hidden");
			o.addClass("dock_s-closed");
			if ($.isFunction(z)) {
				z()
			}
		})
	};
	var d = function() {
		if (u.hasClass("dock_s-hidden")) {
			f();
			b_cookie.dock_my_hotels = "open";
			v();
			booking.google.trackEvent(booking.google.clickTracker, "Dock",
					"Close button clicked")
		} else {
			k();
			b_cookie.dock_my_hotels = "closed";
			v();
			booking.google.trackEvent(booking.google.clickTracker, "Dock",
					"Open button clicked")
		}
	};
	var v = function() {
		if (typeof JSON === "undefined") {
			return
		}
		$.cookie("b", JSON.stringify(b_cookie), {
			expires : 30,
			path : "/",
			domain : booking.env.b_domain_end
		})
	};
	var l = function() {
		var G = $(".dock_compare_link");
		var x = G.attr("href");
		var F = x.split("?");
		var z = F[0];
		var y = F[1].split(";");
		var B = {};
		var C, D = y.length;
		var A;
		for (C = 0; C < D; C++) {
			A = y[C].split("=");
			B[A[0]] = A[1]
		}
		var E = z + "?";
		$.each(B, function(I, H) {
			if (I !== "hotel_ids") {
				E += I + "=" + H + ";"
			}
		});
		E += "hotel_ids=";
		D = m.length;
		for (C = 0; C < D; C++) {
			if (C > 0) {
				E += ","
			}
			E += m[C]
		}
		G.attr("href", E)
	};
	var e = function(y, x) {
		if (!q[y]) {
			q[y] = []
		}
		q[y].push(x)
	};
	var g = function(z) {
		var A = q[z];
		var y;
		var x = A.length;
		if (!A) {
			return
		}
		for (y = 0; y < x; y++) {
			A[y].apply(this, arguments)
		}
	};
	return {
		init : n,
		addHotel : t,
		removeHotel : w,
		attachObserver : e
	}
}());
booking[sNSExperiments].dock_my_hotels = {
	priority : 9,
	init : function() {
		booking.dockMyHotels.init();
		booking.dockMyHotels.attachObserver("addHotel", function(c, d) {
			$(".add_to_my_hotels").each(function() {
				var e = $(this);
				var f = e.attr("data-id");
				if (f === d) {
					e.hide()
				}
			});
			$(".remove_from_my_hotels").each(function() {
				var e = $(this);
				var f = e.attr("data-id");
				if (f === d) {
					e.show()
				}
			})
		});
		booking.dockMyHotels.attachObserver("removeHotel", function(c, d) {
			$(".add_to_my_hotels").each(function() {
				var e = $(this);
				var f = e.attr("data-id");
				if (f === d) {
					e.show()
				}
			});
			$(".remove_from_my_hotels").each(function() {
				var e = $(this);
				var f = e.attr("data-id");
				if (f === d) {
					e.hide()
				}
			})
		});
		booking.dockMyHotels.attachObserver("init", function() {
			$(".add_to_my_hotels").live("click", function() {
				booking.dockMyHotels.addHotel({
					hotel_id : this.getAttribute("data-id"),
					square40 : this.getAttribute("data-thumbnail"),
					title : this.getAttribute("data-title"),
					url : this.getAttribute("data-url"),
					is_favorite : true
				})
			});
			$(".remove_from_my_hotels").live("click", function() {
				var c = this.getAttribute("data-id");
				booking.dockMyHotels.removeHotel(c)
			})
		})
	}
};
booking.lightbox = booking[sNSStartup].light_box = {
	priority : 7,
	template : '<div id="lb_b">&nbsp;</div><div id="lb_w"><div id="lb_c"><a href="#" id="lb_close" class="lb_x"><span>X</span></a><div id="lb_t">Loading...</div></div></div>',
	isopen : false,
	reOpen : {},
	init : function() {
		oThat = this;
		if (!$("#lb_b").length) {
			$("body").append(this.template).each(function() {
				$("#lb_close, #lb_x").click(function(c) {
					oThat.close();
					return false
				});
				$("#lb_w").live("click", function(c) {
					if (c.target == this && typeof oThat.close != "undefined") {
						oThat.close()
					}
					return false
				})
			})
		}
	},
	open : function(j, d, f, n, e, c, q, g, o, l) {
		if (this.isopen) {
			this.reOpen = {
				re : true,
				loc : j,
				ajax : d,
				ct : f,
				node : n,
				width : e,
				height : c,
				coc : q,
				clb : g,
				nxt : o,
				prv : l
			};
			this.close()
		} else {
			var h = (e) ? e : 250;
			$("#lb_c").css({
				width : h + "px"
			});
			if (g == false) {
				$("#lb_close").css({
					display : "none"
				})
			} else {
				var k = h - 5;
				$("#lb_close").css({
					display : "block",
					"margin-left" : k + "px"
				})
			}
			this.isopen = true;
			if (j != null) {
				var r = (c) ? c : 300;
				$("#lb_t").html(
						'<iframe width="' + h + '" height="' + r + '" src="'
								+ j + '" frameborder="0"></iframe>')
			} else {
				if (d != null) {
					$("#lb_t").load(d)
				} else {
					if (f != null) {
						$("#lb_t").html(f)
					} else {
						if (n != null) {
							$("#lb_t").html("");
							var m = $("#" + n).clone();
							$(m).attr("id", "in_lightbox_content");
							$(m).css({
								display : "block"
							});
							$(m).appendTo("#lb_t")
						}
					}
				}
			}
			$("#lb_b").show();
			$("#lb_b").animate({
				opacity : 0.5
			}, 600, function() {
				setTimeout(function() {
					var u = (c) ? c : $("#lb_t").height();
					var t = $(window).height();
					var v = ((t - u) / 2) - 10;
					$("#lb_c").css({
						height : u + "px",
						top : v + "px"
					})
				}, 200);
				$("#lb_w").show("slow", function() {
					var u = (c) ? c : $("#lb_t").height();
					var t = $(window).height();
					var v = ((t - u) / 2) - 10;
					$("#lb_c").css({
						height : u + "px",
						top : v + "px"
					})
				})
			})
		}
	},
	close : function() {
		var c = this;
		$("#lb_b").animate(
				{
					opacity : 0
				},
				700,
				function() {
					$("#lb_c").css({
						height : "20px"
					});
					$("#lb_b").hide();
					c.isopen = false;
					$("#lb_w").hide("fast");
					$("#lb_t").html("Loading...");
					if (c.reOpen.re) {
						var d = c.reOpen;
						c.open(d.loc, d.ajax, d.ct, d.node, d.width, d.height,
								d.coc, d.clb, d.nxt, d.prv);
						c.reOpen = {}
					}
				})
	}
};
booking[sNSExperiments].expired_login_message = {
	priority : 9,
	expire_time : 600000,
	init : function() {
		this.reInit()
	},
	reInit : function() {
		var c = this;
		setTimeout(function() {
			c.showLoggedOutPopup()
		}, this.expire_time)
	},
	showLoggedOutPopup : function() {
		$(".user_salutation").each(function() {
			var c = $(this).attr("id");
			if (c == "hidden_login_form") {
				$(this).removeAttr("id");
				$(this).show()
			} else {
				if (c == "my_links") {
					$(this).remove()
				}
			}
		});
		$("#link_my_profile").remove();
		booking.lightbox.open(null, null, null, "lb_logged_out")
	}
};
booking.dockMyHotels = (function() {
	var k = [];
	var h = [];
	var r;
	var e;
	var d;
	var q;
	var l = 1;
	var f = function(x) {
		var w = '<div class="favorite_hotel favorite_hotel_' + x.hotel_id;
		if (x.is_favorite) {
			w += " favorite_hotel_s-favorite"
		}
		w += '" data-id="'
				+ x.hotel_id
				+ '"><a href="'
				+ x.url
				+ '"><img src="'
				+ x.square40
				+ '" width="30" height="30" alt=""/></a><div class="favorite_hotel_name"><div class="favorite_hotel_name_inner_1"><div class="favorite_hotel_name_inner_2">'
				+ x.title
				+ '</div></div></div><div class="favorite_hotel_remove">&times;</div></div>';
		return w
	};
	var v = function() {
		if (typeof b_cookie === "undefined") {
			window.b_cookie = {}
		}
		r = $(".show_all_favorites");
		$noFavorites = $(".no_favorites");
		e = $(".my_favorites_bar");
		d = $(".dock_close");
		q = /(.+)\/images\/hotel$/.exec(booking.env.dock_images_url)[1];
		$.ajax({
			url : "/my_hotels?filter=favorite",
			dataType : "json",
			success : function(y) {
				var x, w = y.length, z = "";
				for (x = 0; x < w; x++) {
					y[x].square40 = q + y[x].square40;
					y[x].url += booking.env.dock_url_params;
					z += f(y[x]);
					k.push(y[x].hotel_id.toString())
				}
				e.html(z);
				t("init");
				if (k.length < l) {
					$noFavorites.show();
					r.addClass("show_all_favorites-hidden");
					return
				}
				if (b_cookie.dock_my_hotels === "closed") {
					d.addClass("dock_s-closed").removeClass(
							"show_all_favorites-hidden")
				} else {
					r.removeClass("show_all_favorites-hidden");
					d.removeClass("show_all_favorites-hidden");
					$noFavorites.hide()
				}
			}
		});
		e.delegate(".favorite_hotel_remove", "click", function() {
			var w = $(this).parent().attr("data-id");
			u(w)
		});
		d.bind("click", function() {
			m()
		});
		$(".dock_compare_link").bind("click", function() {
		})
	};
	var o = function(x) {
		var y = x.hotel_id;
		if ($.inArray(y, k) > -1) {
			var w = e.find(".favorite_hotel_" + y);
			if (w.hasClass("favorite_hotel_s-favorite")) {
				return
			} else {
				w.addClass("favorite_hotel_s-favorite")
			}
		} else {
			k.unshift(y);
			e.prepend(f(x))
		}
		if (k.length >= l && r.hasClass("show_all_favorites-hidden")) {
			n();
			b_cookie.dock_my_hotels = "open";
			c()
		}
		$.ajax({
			url : "/make_hotel_favorite",
			data : {
				hotel_id : y,
				pid : booking.env.pageview_id
			}
		});
		t("addHotel", y);
		booking.google.trackEvent(booking.google.clickTracker, "FavoritesBar",
				"Hotel added")
	};
	var u = function(y) {
		var x = $.inArray(y, k);
		if (x === -1) {
			return
		}
		k.splice(x, 1);
		var w = e.find(".favorite_hotel_" + y);
		if (k.length >= l) {
			w.remove()
		} else {
			if (r.hasClass("show_all_favorites-hidden")) {
				w.remove();
				d.addClass("show_all_favorites-hidden");
				$noFavorites.show()
			} else {
				j(true, function() {
					w.remove()
				})
			}
		}
		$.ajax({
			url : "/hotel_history",
			type : "DELETE",
			data : {
				hotel_id : y
			}
		});
		t("removeHotel", y);
		booking.google.trackEvent(booking.google.clickTracker, "FavoritesBar",
				"Hotel removed")
	};
	var n = function() {
		var w = d.hasClass("show_all_favorites-hidden") ? r.add(d) : r;
		d.removeClass("dock_s-closed");
		$noFavorites.hide();
		w.css("bottom", -45).removeClass("show_all_favorites-hidden").animate({
			bottom : 0
		}, "fast")
	};
	var j = function(x, y) {
		var w = x ? r.add(d) : r;
		w.css("bottom", 0).animate({
			bottom : -45
		}, "fast", function() {
			w.addClass("show_all_favorites-hidden");
			d.addClass("dock_s-closed");
			$noFavorites.show();
			if ($.isFunction(y)) {
				y()
			}
		})
	};
	var m = function() {
		if (r.hasClass("show_all_favorites-hidden")) {
			n();
			b_cookie.dock_my_hotels = "open";
			c()
		} else {
			j();
			b_cookie.dock_my_hotels = "closed";
			c()
		}
	};
	var c = function() {
		if (typeof JSON === "undefined") {
			return
		}
		$.cookie("b", JSON.stringify(b_cookie), {
			expires : 30,
			path : "/",
			domain : booking.env.b_domain_end
		})
	};
	var g = function(x, w) {
		if (!h[x]) {
			h[x] = []
		}
		h[x].push(w)
	};
	var t = function(y) {
		var z = h[y];
		var x;
		var w = z.length;
		if (!z) {
			return
		}
		for (x = 0; x < w; x++) {
			z[x].apply(this, arguments)
		}
	};
	return {
		init : v,
		addHotel : o,
		removeHotel : u,
		attachObserver : g
	}
}());
booking[sNSExperiments].favorites_bar = {
	priority : 9,
	init : function() {
		booking.dockMyHotels.init();
		booking.dockMyHotels.attachObserver("addHotel", function(c, d) {
			$(".add_to_my_hotels").each(function() {
				var e = $(this);
				var f = e.attr("data-id");
				if (f === d) {
					e.hide()
				}
			});
			$(".remove_from_my_hotels").each(function() {
				var e = $(this);
				var f = e.attr("data-id");
				if (f === d) {
					e.show()
				}
			})
		});
		booking.dockMyHotels.attachObserver("removeHotel", function(c, d) {
			$(".add_to_my_hotels").each(function() {
				var e = $(this);
				var f = e.attr("data-id");
				if (f === d) {
					e.show()
				}
			});
			$(".remove_from_my_hotels").each(function() {
				var e = $(this);
				var f = e.attr("data-id");
				if (f === d) {
					e.hide()
				}
			})
		});
		booking.dockMyHotels.attachObserver("init", function() {
			$(".add_to_my_hotels").live("click", function() {
				booking.dockMyHotels.addHotel({
					hotel_id : this.getAttribute("data-id"),
					square40 : this.getAttribute("data-thumbnail"),
					title : this.getAttribute("data-title"),
					url : this.getAttribute("data-url"),
					is_favorite : true
				})
			});
			$(".remove_from_my_hotels").live("click", function() {
				var c = this.getAttribute("data-id");
				booking.dockMyHotels.removeHotel(c)
			})
		})
	}
};
booking[sNSStartupLoad].flash_deals_for_city = {
	priority : 9,
	init : function() {
		$("#flash_deal_city_sr #city_deal").change(function() {
			$("#flash_deal_city_sr")[0].submit()
		})
	}
};
$(".help_foldout").click(function() {
	$("#helpPopup").slideToggle();
	$(this).toggleClass("open");
	return false
});
$(".menu_close_link").click(function() {
	$("#helpPopup").slideToggle();
	return false
});
booking.ensureNamespaceExists(sNSExperiments);
booking[sNSExperiments].ignore_cb_if_date_set = {
	priority : 9,
	init : function() {
		if (typeof booking.env.b_site_experiment_ignore_cb_if_date_set != "undefined"
				&& booking.env.b_site_experiment_ignore_cb_if_date_set) {
			$("#frm")
					.submit(
							function() {
								if (($("select#checkin_day").val() != 0)
										&& ($("select#checkin_year_month")
												.val() != 0)) {
									$("input#availcheck")
											.attr("checked", false)
								}
								return true
							})
		}
	}
};
booking[sNSExperiments].improve_calendar_closing = {
	priority : 9,
	init : function() {
		$(document.body).click(function(e) {
			var d = $(e.target).parents("#calendar_popup").length;
			var c = $(e.target).parents(".calendarLink").length;
			if (!d && !c) {
				$(this).trigger("close_calendar", e.target)
			}
		});
		return true
	}
};
booking[sNSStartup].filterbox = {
	priority : 9,
	init : function() {
		if (booking.env.b_action === "searchresults") {
			$("div.filtercategory").each(
					function() {
						$(this).click(
								function() {
									$div = $(this).parents("div").eq(0).find(
											"div.filteroptions");
									if ($(this).hasClass("toggla_hide")) {
										mySlideToggle($div);
										$(this).removeClass("toggla_hide")
									} else {
										mySlideToggle($div);
										$(this).addClass("toggla_hide")
									}
									this.blur();
									return false
								});
						$(this).parents("div").eq(0).find(
								".filterelement:not(.cantdeselect)").hover(
								function() {
									if ($(this).hasClass("active")) {
										$(this).addClass("activeon")
									} else {
										$(this).addClass("on")
									}
									return false
								}, function() {
									$(this).removeClass("on");
									$(this).removeClass("activeon");
									return false
								});
						$(this).parents("a").eq(0).find(
								".filterelement:not(.cantdeselect)").hover(
								function() {
									$(this).addClass("on");
									return false
								}, function() {
									$(this).removeClass("on");
									return false
								})
					})
		}
	}
};
booking[sNSExperimentsLoad].lazy_load_print_css = {
	priority : 9,
	init : function() {
		var c = document.createElement("link");
		c.rel = "stylesheet";
		c.type = "text/css";
		c.href = booking.env.print_css_href;
		c.media = "print";
		document.getElementsByTagName("head")[0].appendChild(c)
	}
};
booking[sNSExperimentsLoad].lazyloadimages = {
	priority : 9,
	aLoadImg : [],
	init : function() {
		this.loadImages()
	},
	loadImages : function() {
		var e = $(".lazyLoadImg");
		var d = this;
		for ( var c = 0; c < e.length; c++) {
			this.aLoadImg.push(e[c]);
			setTimeout(function() {
				d.loadOneImage()
			}, (200 * c) + 200)
		}
	},
	loadOneImage : function(d) {
		var c = this.aLoadImg.shift();
		$(c).css(
				{
					background : "#fff url(" + $(c).attr("src")
							+ ") left top no-repeat"
				});
		$(c).removeClass("lazyLoadImg")
	}
};
booking[sNSStartup].login_foldout = {
	priority : 9,
	fontchange : false,
	init : function() {
		var c = this;
		$(".login_foldout").each(function() {
			var d = $("#loginPopup").height();
			if (d == 0) {
				var d = 1000
			}
			$("#loginPopup").css({
				height : "0px",
				"overflow-y" : "hidden",
				display : "none"
			});
			$("#loginPopup").attr({
				shown : "false"
			});
			$(this).click(function() {
				c.toggle(document.getElementById("loginPopup"), d);
				return false
			});
			$("#closeLoginPopup").click(function() {
				c.toggle(document.getElementById("loginPopup"), d);
				return false
			});
			$(".stay_login").submit(function() {
				$("#foldout_error").hide();
				$("#login_loading").show();
				var e = $("#login-form").height();
				$("#loginPopup").css({
					height : e + "px"
				});
				$("#loginPopup").animate({
					height : e + "px"
				}, 500, function() {
				})
			})
		})
	},
	thirdParty : function(f, c, e, d) {
		if (c && !d) {
			$("#log_tar").attr("src", e)
		}
		if (d) {
			$("#email_send").show("slow")
		}
	},
	thirdPartyCancel : function(e, d, c) {
		$("#login_loading").hide();
		if (typeof $.noticeAdd != "undefined") {
			$.noticeAdd({
				text : "\n \n \n " + d + " \n \n \n ",
				stay : false,
				stayTime : 3000,
				type : "users",
				close : "all",
				destination : ""
			})
		}
		if (c) {
			$("#email_send").show("slow")
		}
	},
	reCall : function(c, w, D, h, l, j, r, k, d, u, F, C, A, z, y, x, v, t, E,
			f) {
		var e = this;
		$("#login_loading").hide();
		if (D == "OK") {
			if (c != null || w != null) {
				var m = booking.env.b_this_url;
				m += (m.indexOf("?") > 0) ? "&" : "?";
				m += "lang=" + c + "&selected_currency=" + w;
				document.location.href = m
			} else {
				if (booking.env.b_req_login == "1") {
					document.location.href = booking.env.b_this_url
				} else {
					var q = booking.env.b_this_url;
					q.replace("logout=1", "");
					q = (q.indexOf("?") > 0) ? q + ";logout=1" : q
							+ "?logout=1";
					r = r.replace("sign_out_url", q);
					$("#login-form_wrapper fieldset").hide();
					$("#login_open, #login_close, #login_optional").hide();
					var g = window.setTimeout(function() {
						$("#loginPopup").css({
							height : "0px",
							"overflow-y" : "hidden",
							display : "none"
						});
						$("#loginPopup").attr({
							shown : "false"
						});
						$("#password_input").val("");
						$("#listnav_user .user_salutation").hide();
						$("#listnav_user .user_salutation").attr("id",
								"hidden_login_form");
						$("#myActivityHeader .my_history_header").text(k);
						if (u != "0") {
							if ($("#my_image_room").length) {
								$("#my_image_room").attr("src", u);
								$("#my_image_room").css({
									padding : "0",
									width : "24px",
									height : "24px"
								})
							}
							if ($(".my_image img").length) {
								$(".my_image img").each(function() {
									$(this).attr("src", u);
									if ($(".head_firstname").length) {
										$(this).css({
											"margin-top" : "-5px",
											width : "26px",
											height : "26px"
										})
									}
								})
							}
						}
						if (typeof $.noticeAdd != "undefined") {
							$.noticeAdd({
								text : "\n \n \n " + unescape(l) + "<br>"
										+ unescape(j) + " \n \n \n ",
								stay : false,
								stayTime : 3000,
								type : "users",
								close : "all",
								destination : ""
							})
						}
					}, 500);
					if (F == 1) {
						$("#book_step_login").css({
							"margin-top" : "-17px"
						});
						$("#book_step_login")
								.html(
										"<span>" + booking.env.logged_in_bs
												+ "</span>");
						$("#login_bs_placeholder").hide();
						setTimeout(function() {
							$("#book_step_login").hide("slow")
						}, 5000)
					}
					if (d != "") {
						if ($("#email_confirm").length
								&& $("#email_confirm").val() == "") {
							$("#email_confirm").val(d)
						}
						if ($("#email").length && $("#email").val() == "") {
							$("#email").val(d)
						}
					}
					if (C != "") {
						if ($("#address1").length && $("#address1").val() == "") {
							$("#address1").val(C)
						}
					}
					if (A != "") {
						if ($("#city").length && $("#city").val() == "") {
							$("#city").val(A)
						}
					}
					if (z != "") {
						if ($("#zip").length && $("#zip").val() == "") {
							$("#zip").val(z)
						}
					}
					if (y != "") {
						if ($("#cc1").length && $("#cc1").val() == "") {
							$("#cc1").val(y)
						}
					}
					if (x != "") {
						if ($("#phone").length && $("#phone").val() == "") {
							$("#phone").val(x)
						}
					}
					if (v != "") {
						if ($("#lastname").length && $("#lastname").val() == "") {
							$("#lastname").val(v)
						}
						$(".head_lastname").text(v)
					}
					if (t != "") {
						if ($("#firstname").length
								&& $("#firstname").val() == "") {
							$("#firstname").val(t)
						}
						$(".head_firstname").text(t)
					}
					if ($(".login_for_name").length) {
						var n = v + " " + t;
						if (n != " ") {
							$(".login_for_name").val(n);
							$(".login_for_name").css({
								color : "#003580"
							})
						}
					}
					$("input[name='username']").val(d);
					if (booking.lightbox && booking.lightbox.isopen) {
						booking.lightbox.close()
					}
					if ($("#update_profile_row").length) {
						$("#update_profile_row").show()
					}
					booking[sNSStartup].new_personal_menu.closeSelect(null,
							true, f);
					$(".login_text").hide();
					$(".loggedin_text").show();
					$("#multiple_login").hide()
				}
			}
		} else {
			var o = unescape(h);
			var B = window.setTimeout(function() {
				$("#foldout_error").html(o).show();
				booking[sNSStartup].new_personal_menu
						.openSelect("current_account")
			}, 500);
			if (F == 1) {
				$("#booklogin_error").html(o).show()
			}
		}
	},
	toggle : function(c, f) {
		var e = c.getAttribute("shown");
		if (e == "false") {
			$("#foldout_error").hide();
			$(c).css("display", "block");
			if (f == 1000) {
				var d = $("#loginPopup form").get(0);
				f = $(d).height()
			}
			$(c).animate({
				height : f + "px"
			}, 500, function() {
				document.getElementById("username_input").focus()
			});
			c.setAttribute("shown", "true")
		} else {
			$(c).animate({
				height : "0px"
			}, 500, function() {
				$(this).css("display", "none")
			});
			c.setAttribute("shown", "false")
		}
	}
};
booking[sNSStartup].new_personal_menu = {
	priority : 9,
	opening_state : 0,
	cur_open : "",
	max_select_height : 240,
	is_ie : 0,
	openSlow : false,
	init : function() {
		var c = this;
		if ($.browser.msie) {
			$(".select_foldout ul li a").mouseenter(function() {
				$(this).addClass("hover_class")
			});
			$(".select_foldout ul li a").mouseleave(function() {
				$(this).removeClass("hover_class")
			})
		}
		if ($(".b_msie_6").length) {
			this.is_ie = 6
		}
		if ($(".b_msie_7").length) {
			this.is_ie = 7
		}
		$(".stay_login").submit(function() {
			$("#foldout_error").hide();
			$("#login_loading").show();
			var g = document.getElementById("username_input").value;
			if (g == "") {
				$('label[for="username_input"]').css({
					color : "#B30000",
					"font-weight" : "bold"
				});
				$("#username_input").focus();
				return false
			} else {
				var e = /^[0-9[\.]+$/.exec(g);
				if (e) {
					var d = $("#bm_log").val();
					d += (d.indexOf("?" > 0)) ? "&" : "?";
					var f = $("#password_input", this).val();
					d += "pincode=" + f + "&bn=" + g;
					$("#tar_tmpl").attr("value", "");
					$(this).attr("action", d);
					$(this).attr("target", "_top")
				}
			}
		});
		$(".select_box").mouseenter(function() {
			$(this).addClass("sel_hover")
		});
		$(".select_box").mouseleave(function() {
			$(this).removeClass("sel_hover")
		});
		$("body").click(function(e) {
			if (c.opening_state == 2) {
				var d = $(e.target);
				if ($(d).length) {
					if (!$(d).parents("#current_account_foldout").length) {
						c.closeSelect()
					}
				}
			}
		});
		$(".select_box")
				.click(
						function(d) {
							if (c.opening_state == 0) {
								c.openSelect($(this).attr("id"))
							} else {
								if (c.cur_open != $(this).attr("id")) {
									c.closeSelect($(this).attr("id"))
								} else {
									if (!$(d.target).parents(
											"#current_account_foldout").length) {
										c.closeSelect()
									}
								}
							}
						});
		$("#login_jump").click(function() {
			c.scrollToLogin();
			return false
		})
	},
	resetLeftPos : function(c) {
		$(c).css({
			display : "block",
			overflow : "hidden",
			"margin-left" : "-300px"
		});
		var d = $(c).parents(0).width() - $(c).width() - 2;
		if (this.is_ie == 6 || this.is_ie == 7) {
			d = d - $(c).parents(0).width()
		}
		if (d > 0) {
			d = -2
		}
		$(c).css({
			"margin-left" : d + "px"
		})
	},
	openSelect : function(h) {
		oThat = this;
		this.cur_open = h;
		var j = "#" + h + "_foldout";
		$("#" + h).addClass("sel_open");
		this.opening_state = 1;
		$(j).css({
			display : "block",
			opacity : "0",
			overflow : "hidden",
			height : "400px",
			width : "1000px"
		});
		var l = $(".select_foldout_wrap", j).get(0);
		$(l).css({
			"overflow-y" : "hidden",
			height : "auto"
		});
		var c = $(l).height();
		var g = $(l).width();
		var f = this.max_select_height;
		if ($(j).hasClass("flex_foldout")) {
			var k = g + 10
		} else {
			if (!$("#" + h).hasClass("sel_done")) {
				var k = g + 20;
				$("#" + h).addClass("sel_done")
			} else {
				var k = g
			}
		}
		if (c >= this.max_select_height - 10) {
			if ($(j).hasClass("flex_foldout")) {
				f = c + 10
			} else {
				$(l).css({
					"overflow-y" : "scroll",
					height : "230px",
					width : k + "px"
				});
				if (!this.is_ie == 6 && !this.is_ie == 7) {
					k += 10
				}
			}
		} else {
			f = c + 10;
			$(l).css({
				"overflow-y" : "hidden",
				height : "auto"
			})
		}
		if (this.is_ie == 6) {
			$(j).css({
				opacity : "1",
				height : "0px",
				width : "0px"
			});
			$(j).css({
				width : "auto"
			});
			$(l).css({
				width : "auto"
			});
			g = $(l).width();
			k = g + 10
		} else {
			$(j).css({
				opacity : "1",
				height : "0px",
				width : "auto"
			})
		}
		if ($(j).hasClass("left_foldout") && !booking.env.rtl) {
			oThat.resetLeftPos($(j));
			$(j).css({
				width : k + "px",
				"padding-right" : "0px"
			})
		} else {
			$(j).css({
				width : k + "px",
				"padding-right" : "10px"
			})
		}
		if (this.is_ie == 6 || this.is_ie == 7) {
			var d = $(j).parents(0).width();
			if ($(j).hasClass("left_foldout") && !booking.env.rtl) {
				iFixedPointEx = d - $(j).width() - 2;
				if (iFixedPointEx < 0) {
					d = d - iFixedPointEx
				}
			}
			if (this.is_ie == 6) {
				var k = $(j).width() + 40;
				var e = 210;
				if ($("#multiple_login", j).length) {
					e = 440
				}
				$(j).css({
					"margin-left" : "-" + d + "px",
					width : e + "px",
					"padding-right" : "18px"
				})
			} else {
				$(j).css({
					"margin-left" : "-" + d + "px",
					width : k + "px"
				});
				$(".select_foldout_wrap", j).css({
					"overflow-x" : "hidden"
				})
			}
		}
		if (this.openSlow) {
			this.openSlow = false;
			$(j).animate({
				height : f + "px"
			}, 800)
		} else {
			$(j).css({
				height : f + "px"
			})
		}
		setTimeout(function() {
			oThat.opening_state = 2
		}, 200)
	},
	closeSelect : function(e, f, c) {
		var d = this;
		if (this.opening_state == 2) {
			$(".select_foldout").animate({
				height : "0px"
			}, 200, function() {
				$(".select_foldout").css({
					display : "none"
				});
				$(".select_box").removeClass("sel_open");
				if (e && e != null) {
					d.openSelect(e)
				}
				if (f) {
					if ($(this).attr("id") == "current_account_foldout") {
						$("#foldout_login").css({
							display : "none"
						});
						$("#multiple_login").css({
							display : "none"
						});
						$("#foldout_loggedin").css({
							display : "block"
						});
						if (c) {
							$("#stats_menu_link").css({
								display : "block"
							})
						}
					}
				}
			});
			this.opening_state = 0
		}
	},
	scrollToLogin : function() {
		if (booking.env.rtl) {
			$("body").scrollTo({
				top : 0,
				left : 0
			}, 500)
		} else {
			$("body").scrollTo({
				top : 0,
				left : 1000
			}, 500)
		}
		this.openSlow = true;
		if (this.opening_state == 0) {
			this.openSelect("current_account")
		} else {
			this.closeSelect("current_account")
		}
	}
};
booking[sNSExperimentsLoad].login_in_bs3 = {
	priority : 9,
	init : function() {
		$("#login_bs_placeholder").click(
				function() {
					var c = $(this).position().top + 16;
					var d = $("#address1").position().left
							+ $("#address1").width() + 25;
					$("#book_step_login").css({
						top : c + "px",
						left : d + "px"
					});
					$("#book_step_login").show();
					return false
				});
		$("#book_step_login span.close_link").click(function() {
			$("#book_step_login").hide()
		})
	}
};
booking[sNSExperimentsLoad].login_in_bs2 = {
	priority : 9,
	init : function() {
		var c = this;
		$("#login_bs_placeholder").click(function() {
			var d = $(this).position().top + 20;
			var e = $(this).position().left;
			$("#book_step_login").css({
				top : d + "px",
				left : e + "px"
			});
			$("#book_step_login").show();
			return false
		});
		$("#book_step_login span.close_link").click(function() {
			$("#book_step_login").hide()
		});
		$("#email").keyup(function() {
			c.checkEmailExists(this)
		});
		$("#email").blur(function() {
			c.checkEmailExists(this)
		})
	},
	checkEmailExists : function(e) {
		var c = $(e).val();
		var d = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if (c != "" && d.test($("#email").val())) {
			$.get("/check_if_account_exists?email=" + c, function(f) {
				if (f.user_exists == 1 && f.confirmed == 1) {
					$("#hidden_user_name").val(c);
					$("#login_bs_placeholder").show("slow")
				} else {
					$("#login_bs_placeholder").hide()
				}
			})
		} else {
			$("#login_bs_placeholder").hide()
		}
	}
};
booking[sNSStartup].my_social_networks = {
	priority : 9,
	tp_window : null,
	tp_cur : "",
	cur_state : "CLOSED",
	window_sizes : {
		yahoo : [ 510, 500 ],
		facebook : [ 500, 450 ],
		google : [ 850, 510 ]
	},
	init : function() {
		var c = this;
		$(".signup_tp a, #re_log_in a")
				.click(
						function() {
							booking[sNSStartup].new_personal_menu.opening_state = 2;
							var k = this;
							var e = $(k).attr("href");
							var g = $(k).attr("id");
							var f = e;
							$("#login_loading").show();
							if (c.cur_state != "OPENING") {
								if (c.tp_window) {
									if (c.tp_cur != g.toLowerCase()) {
										window.clearInterval(c.checking_in);
										c.tp_window = null;
										c.cur_state = "CLOSED"
									} else {
										c.tp_window.focus()
									}
								} else {
									c.cur_state = "OPENING";
									c.tp_cur = g.toLowerCase();
									var j = 500;
									var h = 500;
									if (c.window_sizes[c.tp_cur]) {
										var j = c.window_sizes[c.tp_cur][0];
										var h = c.window_sizes[c.tp_cur][0]
									}
									var l = "width="
											+ j
											+ ",height="
											+ h
											+ ",toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1";
									c.tp_window = window.open(f, "", l);
									var d = "rem_provider=" + c.tp_cur;
									if (booking.env.b_this_url.indexOf(d) > -1) {
										booking.env.b_this_url = booking.env.b_this_url
												.replace(";" + d, "");
										booking.env.b_this_url = booking.env.b_this_url
												.replace(d, "")
									}
									c.checking_in = window
											.setInterval(
													function() {
														if ((c.tp_window && c.tp_window.closed)
																|| !c.tp_window) {
															$("#login_loading")
																	.hide();
															window
																	.clearInterval(c.checking_in);
															c.tp_window = null;
															c.cur_state = "CLOSED"
														}
													}, 1000);
									c.cur_state = "OPENED";
									if (c.tp_window) {
										c.tp_window.focus()
									}
								}
							}
							return false
						})
	}
};
$(function() {
	$("#msg_low_avail .button_close").click(function(c) {
		c.preventDefault();
		$("#msg_low_avail").fadeOut("fast")
	})
});
booking.ensureNamespaceExists(sNSExperiments);
booking[sNSStartup].experiment_low_feedback_score_bs4 = {
	priority : 9,
	loadpos : 0,
	savecheck : 0,
	init : function() {
		var c = function() {
			var g = $("input.feebback_booking_number").val();
			var f = $("textarea.comment_feedback").val();
			var e = $(".score_feedback").val();
			var d = $(".feedback_id_hotel").val();
			$("#netPromoterScore p.success").css("display", "none");
			$.ajax({
				type : "POST",
				url : booking.env.b_secure_hostname_feedback + "/feedback",
				data : {
					comment : f + "\nnps" + e,
					hotel_id : d,
					object_id : g,
					type : "nps",
					lang : booking.env.b_lang
				}
			})
		};
		$(".review_low").click(function(d) {
			c();
			d.stopPropagation();
			$("#feedback_score").css("display", "none");
			$("#feedback_score_thank_you").css("display", "block");
			return false
		})
	}
};
booking[sNSExperiments].user_history = {
	priority : 9,
	show_all : false,
	cur_shown : "",
	base_amount : 5,
	items_in_list : 0,
	items_not_in_list : 0,
	init : function() {
		var c = this;
		this.items_in_list = $("#myActivityBox .activityItem").length;
		if (this.items_in_list <= this.base_amount) {
			$("#myHistory").hide()
		}
		$("#myHistory").click(function() {
			if (c.show_all) {
				c.show_all = false;
				$(".showLink", this).show();
				$(".hideLink", this).hide();
				$(window).scrollTo("#myActivityHeader")
			} else {
				c.show_all = true;
				$(".showLink", this).hide();
				$(".hideLink", this).show()
			}
			setTimeout(function() {
				c.showHideMyItems()
			}, 100);
			this.blur();
			return false
		});
		$(".delete a").click(function() {
			var d = $(this).attr("href").substring(1);
			var e = d.split("_");
			c.deleteListItems(e[1], e[0], e[2], false);
			this.blur();
			return false
		});
		$("#removeAllActivity").click(function() {
			c.showDeleteBox();
			return false
		});
		$(".fav a").click(function() {
			if ($(this).parents(".activityItem").length) {
				var e = $(this).parents(".activityItem").get(0)
			} else {
				var e = $(this).parents(".searchresults_favactions").get(0)
			}
			var d = $(this).attr("href").substring(1);
			var f = d.split("_");
			c.swapFavorite(f[1], f[0], f[2], e);
			return false
		});
		$(".activityItem, .hotellist td").mouseenter(function() {
			$(this).addClass("myActivityItemHover")
		});
		$(".activityItem, .hotellist td").mouseleave(function() {
			$(this).removeClass("myActivityItemHover")
		});
		$(".share a").click(function() {
			c.showShareBox(this);
			return false
		});
		setTimeout(function() {
			c.showHideMyItems()
		}, 100);
		this.updateFavLabels();
		$(".closeShareFavoriteBox").click(function() {
			$(".shareFavoriteBox").hide();
			return false
		});
		$(".close_search_dates").click(function() {
			$(".datepicker").hide()
		});
		$(".shareMail")
				.click(
						function() {
							var d = ~($(document).height()
									- $(this).offset().top - 50);
							$(".shareFavoriteBox").hide();
							showFrameContainer("mailafriendImg", "mailafriend",
									"mailafriendFrame", $(this).attr("href"),
									410, 200, -400, d,
									"//q.bstatic.com/static/img/icons/wait.gif");
							return false
						});
		$(".dateprompt").click(function() {
			c.setNewSearchDate(this);
			return false
		});
		return true
	},
	updateFavLabels : function() {
		var c = this;
		$("#activityFilter a")
				.each(
						function() {
							var f = $(this).attr("href").split("#")[1];
							var g = "." + f;
							if (g != "." && !$(g).length) {
								$(this).addClass("disabled");
								if ($(".amount", this).length) {
									$(".amount", this).text(" ")
								} else {
									$(this)
											.html(
													$(this).text()
															+ ' <span class="amount"> </span>')
								}
								if ($(this.parentNode).hasClass("selected")) {
									var d = $("#activityFilter li a").get(0);
									$(d).click()
								}
								$(this).click(function() {
									this.blur();
									return false
								})
							} else {
								$(this).removeClass("disabled");
								var e = (g == ".") ? $("#myActivityBox .activityItem").length
										: $("#myActivityBox " + g).length;
								if ($(".amount", this).length) {
									$(".amount", this).text("(" + e + ")")
								} else {
									$(this).html(
											$(this).text()
													+ ' <span class="amount">('
													+ e + ")</span>")
								}
								$(this).attr("max", e);
								$(this)
										.click(
												function() {
													$("li.selected")
															.removeClass(
																	"selected");
													$(this.parentNode)
															.addClass(
																	"selected");
													c.cur_shown = f;
													setTimeout(function() {
														c.showHideMyItems()
													}, 100);
													if ($(this).attr("max")) {
														if ($(this).attr("max") <= c.base_amount) {
															$("#myHistory")
																	.hide()
														} else {
															$("#myHistory")
																	.show()
														}
													}
													this.blur();
													return false
												})
							}
						})
	},
	showRefreshList : function() {
		var d = this.items_not_in_list;
		var c = (d == 0) ? "Your favorites have been changed"
				: ((d > 0) ? ((d > 1) ? "There are " + d
						+ " new favorites available!"
						: "There is 1 new favorite available!")
						: ((d < -1) ? "There are " + (d * -1)
								+ " favorites removed!"
								: "There is 1 favorite removed!"));
		$("#updateList")
				.html(
						'<div class="status_msg">'
								+ c
								+ '<br /><a href="#" onclick="document.location.reload(); return false;">Click to update your list</a>')
	},
	swapFavorite : function(c, k, j, d) {
		if ($(".favoriteitem", d).length) {
			var f = $(".favoriteitem", d).get(0);
			this.items_not_in_list--;
			$(f).removeClass("favoriteitem")
		} else {
			var f = $("ul", d).get(0);
			this.items_not_in_list++;
			$(f).addClass("favoriteitem")
		}
		if ($(d).hasClass("searchresults_favactions")
				|| $(d.parentNode).hasClass("searchresults_favactions")) {
			this.showRefreshList()
		}
		k = k.replace("item", "");
		var e = "/"
				+ ((k == "hotel") ? "make_hotel_favorite"
						: "make_search_favorite");
		var h = (k == "hotel") ? {
			hotel_id : c,
			pid : booking.env.pageview_id
		} : {
			type : k,
			value : c,
			epoch : j,
			pid : booking.env.pageview_id
		};
		$.ajax({
			url : e,
			data : h
		});
		this.updateFavLabels();
		if (this.cur_shown == "favoriteitem") {
			var g = this;
			setTimeout(function() {
				g.showHideMyItems()
			}, 100)
		}
	},
	deleteAll : function(f) {
		var e = this;
		if (f == "hotelitem") {
			var d = "";
			var c = true;
			$(".hotelitem").each(function() {
				var g = $(".delete a", this).attr("href").substring(1);
				var h = g.split("_");
				if (!$(this).hasClass("favoriteitem")) {
					d = (d == "") ? h[1] : d + "," + h[1]
				} else {
					c = false
				}
			});
			if (c) {
				e.deleteListItems(-1, f, null, true)
			} else {
				if (d != "") {
					e.deleteListItems(d, f, null, false)
				}
			}
		} else {
			e.deleteListItems(null, f, null, true)
		}
	},
	deleteListItems : function(m, c, f, h) {
		var g = this;
		c = c.replace("item", "");
		var e = "/" + ((c == "hotel") ? "hotel_history" : "search_history");
		var d = (c == "hotel") ? ((h) ? {
			hotel_id : -1
		} : {
			hotel_id : m
		}) : ((h) ? {
			type : -1,
			value : null,
			epoch : null
		} : {
			type : c,
			value : m,
			epoch : f
		});
		$.ajax({
			url : e,
			type : "DELETE",
			data : d
		});
		if (h) {
			$("." + c + "item")
					.each(
							function() {
								if (!$(this).hasClass("favoriteitem")
										&& !$(".favoriteitem", this).length) {
									$(this)
											.hide(
													function() {
														if ($(this)
																.parents(
																		".activityItem").length) {
															var o = $(this)
																	.parents(
																			".activityItem")
																	.get(0);
															$(o).remove()
														} else {
															$(this).remove()
														}
													})
								}
							})
		} else {
			var n = m.split(",");
			for ( var l = 0; l < n.length; l++) {
				var k = "#item_" + n[l];
				if ($(k).length) {
					var j = $(k).get(0);
					$(j).hide(function() {
						if ($(this).parents(".activityItem").length) {
							var o = $(this).parents(".activityItem").get(0);
							$(o).remove()
						} else {
							$(this).remove()
						}
					})
				}
			}
		}
		setTimeout(function() {
			g.showHideMyItems();
			g.updateFavLabels()
		}, 400)
	},
	showShareBox : function(g) {
		$(".shareFavoriteBox").hide();
		var d = $(g).attr("href").substring(1);
		var e = document.getElementById(d);
		var f = $(g).position().left - 20;
		var c = $(g).position().top - 15;
		$(e).css({
			left : f + "px",
			top : c + "px"
		});
		$(e).show()
	},
	showDeleteBox : function() {
		var e = this;
		if (!$("#deleteBoxList").length) {
			var c = '<div class="deleteBox" id="deleteBox"><div id="deleteBoxList">';
			c += '</div><input type="button" id="emptyLists" value="empty selected lists" /><input id="closeDeleteBox" type="button" value="cancel" /></div>';
			$("#myActivityBox").append(c);
			$("#closeDeleteBox").click(function() {
				$("#deleteBox").hide()
			});
			$("#emptyLists").click(function() {
				var g = [];
				var f = 0;
				$("#deleteBoxList input:checked").each(function() {
					f++;
					var h = $(this).attr("name");
					setTimeout(function() {
						e.deleteAll(h)
					}, 500 * f)
				});
				$("#deleteBox").hide()
			})
		}
		var d = "";
		$("#activityFilter a").each(
				function() {
					var h = $(this).attr("href").split("#")[1];
					var k = "." + h;
					if (k != "." && $(k).length && k != ".favoriteitem") {
						var f = 0;
						var g = 0;
						$(k).each(function() {
							if (!$(".favoriteitem", this).length) {
								f++
							} else {
								g++
							}
						});
						var j = $(this).clone();
						$(".amount", j).text("(" + f + ")");
						d += '<fieldset><input type="checkbox"'
								+ ((f == 0) ? ' disabled="disabled"'
										: ' checked="checked"') + 'name="' + h
								+ '" id="' + h + '"/>';
						d += '<label for="' + h + '">' + $(j).html()
								+ "</label>";
						d += "</fieldset>"
					}
				});
		$("#deleteBoxList").html(d);
		$("#deleteBox").show()
	},
	setNewSearchDate : function(d) {
		var e = $("#homein").clone();
		var c = $("#homeout").clone();
		$(".datepicker", d.parentNode).show();
		$("#closeDeleteBox").click(function() {
			$("#deleteBox").hide()
		})
	},
	showHideMyItems : function() {
		if (!this.show_all) {
			var e = $("#myActivityItemsWrapper").height();
			$(".myActivityItems").css({
				height : e + "px",
				"overflow-y" : "hidden"
			})
		}
		var f = this;
		var c = 0;
		var d = $(".myActivityItem").length;
		var g = 0;
		$(".activityItem").each(
				function() {
					g++;
					var k = $(this).height();
					var h = false;
					if (f.cur_shown == "" || $(this).hasClass(f.cur_shown)
							|| ($("." + f.cur_shown, this).length)) {
						if (c < f.base_amount || f.show_all) {
							h = true;
							c++
						}
					}
					if (h) {
						if (!$(this).attr("oldheight")) {
							var j = null
						} else {
							var j = $(this).attr("oldheight")
						}
						$(this).removeClass("hidden_item");
						if (j != null) {
							$(this).animate({
								height : j + "px"
							}, 300)
						}
					} else {
						if (k > 1) {
							if (!$(this).attr("oldheight")) {
								$(this).attr("oldheight", k)
							}
							$(this).animate({
								height : "0px"
							}, 300, function() {
								$(this).addClass("hidden_item")
							})
						}
					}
					if (g == d) {
						if (!f.show_all) {
							setTimeout(function() {
								$(".myActivityItems").css({
									height : "auto",
									"overflow-y" : "auto"
								})
							}, 300)
						}
					}
				})
	}
};
booking[sNSStartup].experiment_nps = {
	priority : 9,
	loadpos : 0,
	savecheck : 0,
	init : function() {
		var c = function(f) {
			var g = f.attr("score");
			var d = $("#netPromoterScore_daddy").attr("hr");
			var e = $("#netPromoterScore_daddy").attr("tid");
			$
					.ajax({
						url : "/receive_nps?tid=" + escape(e) + "&hr="
								+ escape(d) + "&nps=" + g,
						context : document.body,
						success : function(k, m, j) {
							var l = $("#netPromoterScore");
							if (l.find("table").length > 0) {
								var h = l.find("table")
							} else {
								var h = l.find("ul")
							}
							if (k.status == "thanks") {
								h.before('<p class="success">'
										+ booking.env.conf_page_thanks_opinion
										+ "</p>");
								if (g < 7
										&& booking.env.js_experiment_tracking.low_feedback_score_bs4 != "") {
									booking.env
											.trackExperiment(booking.env.js_experiment_tracking.low_feedback_score_bs4);
									$("#feedback_score")
											.css("display", "block");
									$(".score_feedback").val(g)
								} else {
									$("#feedback_score").css("display", "none")
								}
							} else {
								if (k.status == "voted_already") {
									h
											.before('<p class="voted">'
													+ booking.env.conf_page_answered_question
													+ "</p>")
								} else {
									h
											.before('<p class="error">'
													+ booking.env.conf_page_error_inconvenience
													+ "</p>")
								}
							}
							h.fadeOut()
						},
						dataType : "json",
						type : "PUT"
					})
		};
		if ($("#netPromoterScore").length > 0) {
			$("#netPromoterScore").fadeIn()
		}
		$("td, li", "#netPromoterScore").click(function(d) {
			c($(this));
			d.stopPropagation();
			return false
		});
		$("td input, td label, li input, li label", "#netPromoterScore").click(
				function() {
					return true
				})
	}
};
booking[sNSExperiments].no_rooms_searchbox = {
	priority : 9,
	current_rows : 1,
	submit_groups : false,
	init : function() {
		var f = this;
		$("#in_a_group").hide();
		$("#in_a_group_narrow").hide();
		$("#clear_group").val("1");
		$("#group_definition select").live("change", function() {
			f.submit_groups = true
		});
		$("#frm").submit(function() {
			if (!f.submit_groups) {
				$("#clear_group").val("1");
				$("#in_a_group").attr("checked", false);
				$("#in_a_group_narrow").attr("checked", false)
			}
		});
		if ($("#checkout_monthday").val() != 0) {
			this.hide_no_dates()
		}
		if ($("#no_rooms select").val() > 1) {
			while ($("#no_rooms select").val() > f.current_rows) {
				var d = $("#define_group tbody tr").length + 1;
				var c = $("#define_group tbody").append(
						booking[sNSStartup].b_GroupDefinitionModule.row_markup
								.replace(/XXX/, d));
				$("#clear_group").val("0");
				booking[sNSStartup].b_GroupDefinitionModule
						.addChildrenHandlers(c);
				f.current_rows++
			}
		}
		$("#group_definition tbody a").live("click", function() {
			f.current_rows--;
			$("#no_rooms select").val(f.current_rows)
		});
		$("#group_definition tfoot a").click(function() {
			if (f.current_rows >= $("#no_rooms select").val()) {
				f.current_rows++;
				$("#no_rooms select").val(f.current_rows)
			}
		});
		$("#no_rooms select")
				.change(
						function() {
							while ($(this).val() > f.current_rows) {
								var j = $("#define_group tbody tr").length + 1;
								var h = $("#define_group tbody")
										.append(
												booking[sNSStartup].b_GroupDefinitionModule.row_markup
														.replace(/XXX/, j));
								$("#clear_group").val("0");
								booking[sNSStartup].b_GroupDefinitionModule
										.addChildrenHandlers(h);
								f.current_rows++
							}
							while ($(this).val() < f.current_rows) {
								var g = $("#group_definition tbody a").last();
								$(g).parents("tr").eq(0).remove();
								if ($("#group_definition tbody tr").length === 0) {
									$("#clear_group").val("1")
								}
								f.current_rows--
							}
						});
		var e = $("#define_group label").get(0);
		$(e).hide();
		$("#define_occupancy").click(
				function() {
					if (booking.env.b_action == "hotel"
							|| booking.env.b_action == "searchresults") {
						$("#group_definition_modal").show()
					} else {
						$("#group_definition").show()
					}
					return false
				})
	},
	hide_no_dates : function() {
		$("#availcheck").parent(0).hide();
		$("#no_rooms").show()
	}
};
booking.ensureNamespaceExists(sNSExperiments);
booking[sNSExperiments].pin_sortbar = {
	priority : 9,
	headerOffsetTop : 0,
	placeHolder : null,
	$header : null,
	$window : null,
	lastrowOffsetTop : 0,
	init : function() {
		var e = jQuery.browser.msie && jQuery.browser.version == 6;
		if ($(".hotellist_wrap .hotellist > tbody > tr").size() > 2 && !e) {
			this.$header = $("#sort_by");
			this.headerOffsetTop = this.$header.offset().top;
			this.lastrowOffsetTop = $(".hotellist_wrap .hotellist > tbody > tr")
					.last().offset().top;
			this.$window = $(window);
			this.headerOffsetLeft = this.$header.offset().left;
			this.headerPositionLeft = this.$header.position().left;
			this.$header.css({
				width : this.$header.width()
			});
			var d = this.$header.css({
				overflow : "hidden"
			}).height();
			this.$header.css({
				overflow : "visible"
			});
			this.placeHolder = $("<div>").css({
				height : d,
				width : 10
			}).hide().insertBefore(this.$header);
			var c = this;
			c.setupScrollListener();
			this.$window.scroll(function() {
				c.setupScrollListener()
			})
		}
	},
	setupScrollListener : function() {
		this.lastrowOffsetTop = $(".hotellist_wrap .hotellist > tbody > tr")
				.last().offset().top;
		if (this.$window.scrollTop() >= this.headerOffsetTop) {
			this.placeHolder.show();
			this.$header.addClass("pin_sortbar");
			if (this.$window.scrollTop() + this.$header.height() <= this.lastrowOffsetTop) {
				this.$header.removeClass("pin_sortbar--absolute");
				this.$header.css({
					top : 0,
					left : this.headerOffsetLeft
				})
			} else {
				this.$header.addClass("pin_sortbar--absolute");
				this.$header.css({
					top : this.lastrowOffsetTop - this.$header.height(),
					left : this.headerPositionLeft
				})
			}
		} else {
			this.placeHolder.hide();
			this.$header.removeClass("pin_sortbar pin_sortbar--absolute")
		}
	}
};
booking.ensureNamespaceExists(sNSExperiments);
booking[sNSExperiments].popular_city_dropdown = {
	priority : 9,
	oInput : null,
	dropdown : null,
	placeholder : "",
	title : "",
	currentSelectedCity : "",
	currentDest_id : 0,
	init : function() {
		var d = this, c = false;
		this.oInput = $("input#destination");
		this.dropdown = $(".popular_city_dropdown");
		this.placeholder = this.oInput.attr("placeholder");
		this.title = this.oInput.attr("title");
		if (this.dropdown.length == 0) {
			return
		}
		this.createDropdown();
		this.oInput.focus(function() {
			if (this.value == "" && !c) {
				d.showDropdown()
			}
			c = false
		});
		if ($.browser.msie) {
			this.oInput.get(0)
					.attachEvent(
							"ondeactivate",
							function(g) {
								if ($(event.toElement).hasClass("closeButton")
										|| ($(event.toElement).closest(
												".city_area").length > 0)) {
									d.oInput.css("color", d.oInput
											.css("backgroundColor"))
								}
							})
		}
		this.oInput.bind("keydown", function(g) {
			if (g.keyCode == 27 || g.keyCode == 9) {
				d.hideDropdown()
			}
		});
		this.oInput.bind("keyup", function(g) {
			if (this.value != "") {
				d.hideDropdown()
			} else {
			}
		});
		this.dropdown.click(function(g) {
			g.stopPropagation();
			return false
		});
		this.dropdown.find(".city_area a").click(function() {
			d.oInput.val($(this).text());
			d.hideDropdown();
			d.oInput.focus();
			d.oInput.removeClass("blur");
			d.setEndOfContenteditable(d.oInput.get(0));
			d.currentSelectedCity = d.oInput.val();
			d.currentDest_id = $(this).data("destId")
		});
		this.dropdown.find(".closeButton").click(function() {
			d.hideDropdown();
			c = true;
			d.oInput.get(0).focus()
		});
		$(window).resize(function() {
			d.resetDorpdown()
		});
		var f = this.oInput.closest("form"), e = f.find("fieldset");
		f.bind("submit", function(g, h) {
			if (d.oInput.val() != "" && d.currentDest_id != 0
					&& (d.currentSelectedCity == d.oInput.val())) {
				e.find("input[name='dest_type'], input[name='dest_id']")
						.remove();
				e.append($("<input>", {
					type : "hidden",
					name : "dest_type",
					value : "city"
				}));
				e.append($("<input>", {
					type : "hidden",
					name : "dest_id",
					value : d.currentDest_id
				}))
			}
		})
	},
	createDropdown : function() {
		var c = this;
		$(".popular_city_dropdown").appendTo($("body"));
		this.dropdown = $(".popular_city_dropdown");
		var d = this.oInput.offset();
		this.dropdown.css("top", d.top + this.oInput.outerHeight() + "px");
		this.resetDorpdown();
		if ($.browser.msie && ($.browser.version == 6)) {
			if ($.fn.bgiframe) {
				this.dropdown.bgiframe()
			}
		}
	},
	resetDorpdown : function() {
		var c = this.oInput.offset();
		this.dropdown.css("left", c.left + "px");
		this.dropdown.width(this.oInput.outerWidth() - 2)
	},
	showDropdown : function() {
		this.dropdown.show();
		var c = this;
		setTimeout(function() {
			$(document.body).one("click", function(d) {
				c.hideDropdown()
			})
		}, 200);
		this.oInput.attr("placeholder", "")
	},
	hideDropdown : function() {
		this.dropdown.hide();
		if ($.browser.msie) {
			this.oInput.css("color", "")
		}
		this.oInput.attr("placeholder", this.placeholder)
	},
	setEndOfContenteditable : function(d) {
		pos = d.value.length;
		if (d.setSelectionRange) {
			d.setSelectionRange(pos, pos)
		} else {
			if (d.createTextRange) {
				var c = d.createTextRange();
				c.collapse(true);
				c.moveEnd("character", pos);
				c.moveStart("character", pos);
				c.select()
			}
		}
	}
};
$(function() {
	$("a.room_link_changes_date").click(function(c) {
		c.stopPropagation();
		c.preventDefault();
		$(this).siblings(".confirm_change_date").css({
			top : c.pageY + "px"
		}).show().find("a[href=#continue]").attr("href", $(this).attr("href"))
	});
	$(".confirm_change_date a[href=#cancel]").click(function(c) {
		c.stopPropagation();
		c.preventDefault();
		$(".confirm_change_date").hide()
	});
	$(".confirm_change_date").click(function(c) {
		c.stopPropagation()
	});
	if ($(".confirm_change_date").length > 0) {
		$("body").click(function() {
			$(".confirm_change_date").hide()
		})
	}
	if ($("#maxotel_rooms tr.highlight").length > 0) {
		$("body, html").scrollTop($("#availability_target").offset().top)
	}
});
$(function() {
	$("a.hotel_link_changes_date").click(function(c) {
		c.stopPropagation();
		c.preventDefault();
		$(this).siblings(".confirm_change_date_hotel").css({
			top : c.pageY + "px"
		}).show().find("a[href=#continue]").attr("href", $(this).attr("href"))
	});
	$(".confirm_change_date_hotel a[href=#cancel]").click(function(c) {
		c.stopPropagation();
		c.preventDefault();
		$(".confirm_change_date_hotel").hide()
	});
	$(".confirm_change_date_hotel").click(function(c) {
		c.stopPropagation()
	});
	if ($(".confirm_change_date_hotel").length > 0) {
		$("body").click(function() {
			$(".confirm_change_date_hotel").hide()
		})
	}
	if ($("#maxotel_rooms tr.highlight").length > 0) {
		$("body, html").scrollTop($("#availability_target").offset().top)
	}
});
$(function() {
	$("a.photo_link_changes_date").click(function(c) {
		c.stopPropagation();
		c.preventDefault();
		$(this).siblings(".confirm_change_date_photo").css({
			top : c.pageY + "px"
		}).show().find("a[href=#continue]").attr("href", $(this).attr("href"))
	});
	$(".confirm_change_date_photo a[href=#cancel]").click(function(c) {
		c.stopPropagation();
		c.preventDefault();
		$(".confirm_change_date_photo").hide()
	});
	$(".confirm_change_date_photo").click(function(c) {
		c.stopPropagation()
	});
	if ($(".confirm_change_date_photo").length > 0) {
		$("body").click(function() {
			$(".confirm_change_date_photo").hide()
		})
	}
	if ($("#maxotel_rooms tr.highlight").length > 0) {
		$("body, html").scrollTop($("#availability_target").offset().top)
	}
});
$(function() {
	$("a.review_link_changes_date").click(function(c) {
		c.stopPropagation();
		c.preventDefault();
		$(this).siblings(".confirm_change_date_review").css({
			top : c.pageY + "px"
		}).show().find("a[href=#continue]").attr("href", $(this).attr("href"))
	});
	$(".confirm_change_date_review a[href=#cancel]").click(function(c) {
		c.stopPropagation();
		c.preventDefault();
		$(".confirm_change_date_review").hide()
	});
	$(".confirm_change_date_review").click(function(c) {
		c.stopPropagation()
	});
	if ($(".confirm_change_date_review").length > 0) {
		$("body").click(function() {
			$(".confirm_change_date_review").hide()
		})
	}
	if ($("#maxotel_rooms tr.highlight").length > 0) {
		$("body, html").scrollTop($("#availability_target").offset().top)
	}
});
$(function() {
	$("a.more_link_changes_date").click(function(c) {
		c.stopPropagation();
		c.preventDefault();
		$(this).siblings(".confirm_change_date_more").css({
			top : c.pageY + "px"
		}).show().find("a[href=#continue]").attr("href", $(this).attr("href"))
	});
	$(".confirm_change_date_more a[href=#cancel]").click(function(c) {
		c.stopPropagation();
		c.preventDefault();
		$(".confirm_change_date_more").hide()
	});
	$(".confirm_change_date_more").click(function(c) {
		c.stopPropagation()
	});
	if ($(".confirm_change_date_more").length > 0) {
		$("body").click(function() {
			$(".confirm_change_date_more").hide()
		})
	}
	if ($("#maxotel_rooms tr.highlight").length > 0) {
		$("body, html").scrollTop($("#availability_target").offset().top)
	}
});
$(function() {
	$("a.scarcity_link_changes_date").click(function(c) {
		c.stopPropagation();
		c.preventDefault();
		$(this).siblings(".confirm_change_date_scarcity").css({
			top : c.pageY + "px"
		}).show().find("a[href=#continue]").attr("href", $(this).attr("href"))
	});
	$(".confirm_change_date_scarcity a[href=#cancel]").click(function(c) {
		c.stopPropagation();
		c.preventDefault();
		$(".confirm_change_date_scarcity").hide()
	});
	$(".confirm_change_date_scarcity").click(function(c) {
		c.stopPropagation()
	});
	if ($(".confirm_change_date_scarcity").length > 0) {
		$("body").click(function() {
			$(".confirm_change_date_scarcity").hide()
		})
	}
	if ($("#maxotel_rooms tr.highlight").length > 0) {
		$("body, html").scrollTop($("#availability_target").offset().top)
	}
});
booking[sNSExperiments].my_city_autocomplete = {
	res_location : "/autocomplete?lang=en&aid=100000&skip_suggestions=&term=",
	store_locations : {},
	cur_index : -1,
	init : function() {
		this.res_location = "/autocomplete?lang=" + booking.env.b_lang
				+ "&aid=" + booking.env.b_aid + "&skip_suggestions=&term=";
		var c = this;
		$("#city_add, #country_add, #userdataform #city").keypress(function(d) {
			if (d.keyCode == 13) {
				d.preventDefault();
				return false
			}
		});
		$("#city_add, #country_add, #userdataform #city").blur(function() {
			c.cleanList(this)
		});
		$("#city_add, #country_add, #userdataform #city")
				.keyup(
						function(d) {
							if (d.keyCode
									&& (d.keyCode == 38 || d.keyCode == 40 || d.keyCode == 13)) {
								if (d.keyCode == 38) {
									d.preventDefault();
									c.cur_index--;
									if (c.cur_index < 0) {
										c.cur_index = $(".add_result li",
												this.parentNode).length - 1
									}
									c.makeSelect(this);
									return false
								}
								if (d.keyCode == 40) {
									d.preventDefault();
									c.cur_index++;
									if ($(".add_result li", this.parentNode).length <= c.cur_index) {
										c.cur_index = 0
									}
									c.makeSelect(this);
									return false
								}
								if (d.keyCode == 13) {
									d.preventDefault();
									c.clickSelect(this);
									return false
								}
							} else {
								c.cur_index = -1;
								c.cleanList(this);
								var f = $(this).val();
								var e = $(this).attr("search");
								if (f.length > 1) {
									oField = this;
									setTimeout(function() {
										c.loadList(oField, e)
									}, 100)
								}
							}
						});
		$(".favlist .remover").live("click", function() {
			$(this).removeClass("jq_tooltip");
			$("img", this).attr("alt", "");
			c.removeFavourite(this, $(this).attr("remtype"));
			return false
		});
		$(".add_result li").live("mouseenter", function() {
			$("li", this.parentNode).removeClass("sel_fav");
			$(this).addClass("sel_fav");
			c.cur_index = $("li", this.parentNode).index(this);
			var d = $("input", this.parentNode.parentNode).get(0);
			$(d).focus()
		});
		$("#pref_city").click(function() {
			$(this).hide();
			$("#pref_city_add").show();
			$("#city_add").focus();
			return false
		});
		$("#pref_country").click(function() {
			$(this).hide();
			$("#pref_country_add").show();
			$("#country_add").focus();
			return false
		})
	},
	makeSelect : function(c) {
		$(".add_result li", c.parentNode).removeClass("sel_fav");
		if ($(".add_result li", c.parentNode).length > this.cur_index) {
			var d = $(".add_result li", c.parentNode).get(this.cur_index);
			$(d).addClass("sel_fav")
		}
	},
	clickSelect : function(c) {
		if ($(".add_result li.sel_fav", c.parentNode).length) {
			$(".add_result li.sel_fav a", c.parentNode).click()
		} else {
			if ($(".add_result li", c.parentNode).length == 1) {
				$(".add_result li a", c.parentNode).click()
			} else {
			}
		}
	},
	loadList : function(f, d) {
		var e = this;
		var f = f;
		var g = $(f).val();
		var c = this.res_location + g;
		if (d == "country") {
			c += "&countries_only=1"
		} else {
			if (d == "city") {
				c += "&cities_only=1&give_cc1=1"
			}
		}
		$.ajax({
			url : c,
			success : function(l) {
				var h = "";
				var m = false;
				for ( var k = 0; k < l.length; k++) {
					if (l[k].dest_type == d) {
						var j = l[k].label.replace("'", "");
						var n = "";
						if (l[k].cc1) {
							var n = l[k].cc1[0]
						}
						h += '<li onclick="' + e.ns + "." + e.name
								+ ".addLocation(" + k
								+ ", document.getElementById('city_link_" + k
								+ "'), '" + l[k].dest_type + "', '" + j
								+ "', '" + n
								+ '\');return false;"><a id="city_link_' + k
								+ '" href="#" onClick="return false;">'
								+ l[k].label + "</a></li>";
						m = true
					}
				}
				$(".add_result", f.parentNode).html(h);
				if (m) {
					$(".add_result", f.parentNode).css({
						border : "1px solid #dddddd",
						background : "#ffffff"
					})
				} else {
					$(".add_result", f.parentNode).css({
						border : "0",
						background : "transparent"
					})
				}
				e.store_locations = l
			}
		})
	},
	cleanList : function(c) {
		$(".add_result", c.parentNode).html("");
		$(".add_result", c.parentNode).css({
			border : "0",
			background : "transparent"
		});
		oThat.store_locations = {}
	},
	addLocation : function(n, d, k, c, m) {
		var e = this;
		var w = this.store_locations[n];
		if (k == "city") {
			var f = booking.env.fav_city_locations;
			var q = w.dest_id
		} else {
			var f = booking.env.fav_country_locations;
			var q = w.co_code
		}
		var v = "favlocation_" + q;
		if ($("#userdataform").length) {
			var g = c.split(",");
			var j = g[0];
			if (booking.env.b_site_experiment_prefill_country) {
				if (m != "") {
					if ($("#country").length) {
						$("#country").val(m)
					}
					if ($("#cc1").length) {
						$("#cc1").val(m)
					}
				}
			}
			$("#city").val(j);
			$("#city_id").val(q);
			e.cleanList($(d).parents("ul").get(0))
		} else {
			if ($("#" + v).length) {
			} else {
				f[f.length] = q;
				this.saveFavourites(k);
				e.cleanList($(d).parents("ul").get(0));
				var t = w.label;
				var l = t.split(",");
				var u = l[0];
				var o = "";
				if (l.length > 0) {
					for ( var r = 1; r < l.length; r++) {
						o += (r > 1) ? "," : "";
						o += l[r]
					}
				}
				var h = '<li class="roundme">';
				h += '<a href="#" id="'
						+ v
						+ '" class="jq_tooltip remover" remtype="'
						+ k
						+ '" title="remove this item"><img src="http://bstatic.com/static/img/icon_cancel_trans.png" alt="Remove item" /></a>';
				h += '<a href="">';
				if (k == "city") {
					h += '<span class="roundme def_city">&nbsp;</span>';
					h += '<span class="roundme city_img" style="background:transparent url(\'/static/img/city/'
							+ q
							+ "/32x32.jpg') left top no-repeat;\">&nbsp;</span>"
				} else {
					h += '<img class="roundme" src="/static/img/flags/24/' + q
							+ '.png" alt="" />'
				}
				h += "</a>";
				if (k == "city") {
					h += '<a href="' + booking.env.b_nonsecure_hostname_signup
							+ "/searchresults." + booking.env.b_lang
							+ ".html?city=" + q + '">' + u + "</a>"
				} else {
					h += '<a href="' + booking.env.b_nonsecure_hostname_signup
							+ "/country/" + q + "." + booking.env.b_lang
							+ '.html">' + u + "</a>"
				}
				h += "<span>" + o + "</span>";
				if (k == "city") {
					$("#addNewCity").before(h);
					$("#city_add").val("")
				} else {
					$("#addNewCountry").before(h);
					$("#country_add").val("")
				}
			}
			this.animateAdding(v)
		}
	},
	animateAdding : function(c) {
		var d = $("#" + c).get(0);
		var e = 0;
		var f = window.setInterval(function() {
			e++;
			var g = 255 - (e * 5);
			if (e > 51) {
				g = (e * 5) - 255
			}
			if (e > 101) {
				$(d.parentNode).css({
					background : ""
				});
				window.clearInterval(f)
			} else {
				$(d.parentNode).css({
					background : "rgb(255," + g + "," + g + ")"
				})
			}
		}, 10)
	},
	removeFavourite : function(d, h) {
		var g = $(d).attr("id").split("favlocation_")[1];
		var c = (h == "city") ? booking.env.fav_city_locations
				: booking.env.fav_country_locations;
		var e = -1;
		for ( var f = 0; f < c.length; f++) {
			if (c[f] == g) {
				e = f
			}
		}
		if (e != -1) {
			c.splice(e, 1);
			this.saveFavourites(h)
		}
		$(d.parentNode).html("");
		setTimeout(function() {
			$(d.parentNode).remove()
		}, 300)
	},
	saveFavourites : function(g) {
		var f = (g == "city") ? "cities?ufis" : "countries?cc1s";
		var c = (g == "city") ? booking.env.fav_city_locations
				: booking.env.fav_country_locations;
		var e = "/set_favorite_" + f + "=";
		for ( var d = 0; d < c.length; d++) {
			if (d > 0) {
				e += ","
			}
			e += c[d]
		}
		$.ajax({
			url : e,
			type : "POST",
			success : function(h) {
			}
		})
	}
};
booking[sNSStartup].search_history = {
	priority : 9,
	fullListShowed : false,
	minListSize : 5,
	lastviewTimer : null,
	loadStart : null,
	init : function() {
		this.loadStart = new Date();
		var c = this;
		if (document.getElementById("SearchHistory")) {
			try {
				this.minListSize = parseInt($("#SearchHistory").attr("min"))
			} catch (d) {
			}
			$("a.remove_search").click(function() {
				var f = $(this).attr("href").substring(1).split(";");
				var g = f[0];
				var e = f[1];
				var h = f[2];
				$.ajax({
					url : "/search_history",
					type : "DELETE",
					data : {
						type : g,
						value : e,
						epoch : h
					}
				});
				booking[sNSStartup].search_history.cleanupHistoryList(this);
				this.blur();
				return false
			});
			if ($("#showAllSearches").length) {
				$("#showAllSearches").click(function() {
					booking[sNSStartup].search_history.showAll();
					this.blur();
					return false
				})
			}
			if ($("#removeAllSearches").length) {
				$("#removeAllSearches").click(function() {
					booking[sNSStartup].search_history.removeAll(true);
					this.blur();
					return false
				})
			}
		}
		return true
	},
	cleanupHistoryList : function(d) {
		var c = this.minListSize;
		$(d).parent().fadeOut(500, function() {
			$(d).parents("li").remove();
			if ($("#SearchHistory li").length > c - 1) {
				var e = $("#SearchHistory li").get(c - 1);
				$(e).fadeIn(1000)
			}
		});
		if ($("#SearchHistory li").length < 2) {
			booking[sNSStartup].search_history.removeAll(false)
		}
		if (document.getElementById("showAllSearches")) {
			if ($("#SearchHistory li").length < c + 2) {
				$("#moreSearchesLinkWrapper").hide()
			}
		}
	},
	showAll : function() {
		var c = $("#SearchHistory li");
		var d = this.minListSize;
		if (!booking[sNSStartup].search_history.fullListShowed) {
			for (i = d - 1; i < c.length; i++) {
				$(c[i]).fadeIn(500)
			}
			booking[sNSStartup].search_history.fullListShowed = true
		} else {
			for (i = d; i < c.length; i++) {
				$(c[i]).fadeOut(500)
			}
			booking[sNSStartup].search_history.fullListShowed = false
		}
		booking[sNSStartup].search_history.switchCaption()
	},
	removeAll : function(c) {
		if (c) {
			$.ajax({
				url : "/search_history",
				type : "DELETE",
				data : {
					type : -1,
					value : null,
					epoch : null
				}
			})
		}
		$("#SearchHistory").fadeOut(500, function() {
			$(this).remove()
		})
	},
	switchCaption : function() {
		if (booking[sNSStartup].search_history.fullListShowed) {
			$("#showAllSearches .showLink").hide();
			$("#showAllSearches .hideLink").show()
		} else {
			$("#showAllSearches .showLink").show();
			$("#showAllSearches .hideLink").hide()
		}
	}
};
$("a.search_summary_toggle_button").click(function() {
	$(".search_summary_block").hide();
	$(".original_search_form").removeClass("original_search_form_hidden");
	return false
});
booking[sNSStartupLoad].search_all_roomtypes = {
	priority : 9,
	init : function() {
		this.addMoreLink(document);
		$("a.more_rooms_link")
				.live(
						"click",
						function() {
							var c = booking.env.b_site_experiment_sr_fewer_rooms ? 2
									: 3;
							if ($(".define_group_table").length) {
								if ($(this).hasClass("more_rooms_hide")) {
									$(this).next().hide();
									$(this).removeClass("more_rooms_hide")
								} else {
									$(this).next().show();
									$(this).addClass("more_rooms_hide")
								}
							} else {
								if ($(this).hasClass("more_rooms_hide")) {
									$(this).parents("table").eq(0).find(
											"tbody tr:gt(" + (c - 1) + ")")
											.addClass("hidden");
									$(this).removeClass("more_rooms_hide")
								} else {
									$(this).parents("table").eq(0).find(
											"tbody tr:gt(" + (c - 1) + ")")
											.removeClass("hidden");
									$(this).addClass("more_rooms_hide")
								}
							}
							this.blur();
							if (typeof booking.env.b_site_experiment_clicktale != "undefined"
									&& booking.env.b_site_experiment_clicktale
									&& typeof ClickTale == "function") {
								ClickTaleExec('$("a.more_rooms_link:eq('
										+ $("a.more_rooms_link").index(this)
										+ ')").trigger("click")')
							}
							return false
						});
		return true
	},
	addMoreLink : function(c) {
		if (booking.env.b_action === "searchresults") {
			if (booking.env.b_site_experiment_improved_group_booking_block2
					&& $(".group_table").length) {
				$("form table.featuredRooms").each(
						function() {
							var d = booking.env.group_booking_02;
							$(this).hide().before(
									'<a class="more_rooms_link" href="#">' + d
											+ "</a>")
						})
			} else {
				if (!$("table.featuredRooms .more_rooms_link", c).length) {
					$("form table.featuredRooms", c)
							.each(
									function() {
										var f = $(this).find("tbody tr").length, d = booking.env.b_site_experiment_sr_fewer_rooms ? 2
												: 3, g = "";
										f -= d;
										if (f > 1) {
											if (typeof booking.env.see_all_xxxx_rooms != "undefined"
													&& booking.env.see_all_xxxx_rooms != "") {
												var h = booking.env.see_all_xxxx_rooms
														.replace(/XXXX/, f)
											} else {
												var h = f + " more"
											}
											if (typeof booking.env.b_site_experiment_searchresults_all_roomtypes_text != "undefined"
													&& booking.env.b_site_experiment_searchresults_all_roomtypes_text) {
												var e = b_hidden_roomtypes[$(
														this).parent().find(
														"input[name=hotel_id]")
														.val()];
												if (e != "") {
													h += " - " + e
												}
											}
											if (booking.env.b_site_experiment_include_taxes_for_all_euro_countries == 2) {
												$(this).parent("form").find(
														".taxes_included-tag")
														.css("top", "-1em")
											}
											$(this)
													.find("tfoot")
													.prepend(
															'<tr><td colspan="'
																	+ booking.env.width_of_tfoot
																	+ '"><a class="more_rooms_link" href="#">'
																	+ h
																	+ "</a></td></tr>")
													.parent()
													.each(
															function() {
																$(this)
																		.find(
																				"tbody tr:gt("
																						+ (d - 1)
																						+ ")")
																		.addClass(
																				"hidden")
															})
										}
									})
				}
			}
		}
	}
};
booking.social_plugins_footer = (function() {
	var e = $("#footer_fb");
	var h = $("#footer_tw");
	var k = $("#footer_gp");
	var d = false;
	var g = false;
	var f = false;
	var c = function(n, m) {
		var l = document.createElement("script");
		l.type = "text/javascript";
		l.src = n;
		m.find(".footer_tooltip").append(l)
	};
	var j = function() {
		e
				.hover(
						function(l) {
							e.find(".footer_tooltip").fadeIn();
							booking.google.trackEvent(
									booking.google.hoverTracker,
									"Social Media Footer icons", "Facebook");
							if (d) {
								return
							}
							e
									.find(".footer_tooltip")
									.append(
											'<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com%2Fbookingcom&amp;send=false&amp;layout=button_count&amp;width=450&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:150px; height:21px;" allowTransparency="true"></iframe>');
							d = true
						}, function() {
							e.find(".footer_tooltip").fadeOut()
						});
		h.hover(function(l) {
			h.find(".footer_tooltip").fadeIn();
			booking.google.trackEvent(booking.google.hoverTracker,
					"Social Media Footer icons", "Twitter");
			if (g) {
				return
			}
			c("//platform.twitter.com/widgets.js", h);
			g = true
		}, function() {
			h.find(".footer_tooltip").fadeOut()
		});
		k.hover(function(l) {
			k.find(".footer_tooltip").fadeIn();
			booking.google.trackEvent(booking.google.hoverTracker,
					"Social Media Footer icons", "Google+");
			if (f) {
				return
			}
			c("https://apis.google.com/js/plusone.js", k);
			f = true
		}, function() {
			k.find(".footer_tooltip").fadeOut()
		})
	};
	return {
		init : j
	}
}());
booking[sNSExperiments].social_plugins_footer = {
	priority : 9,
	init : function() {
		booking.social_plugins_footer.init()
	}
};
booking.dockSocial = (function() {
	var c = false;
	var e = function(j) {
		var g = document.createElement("script");
		g.type = "text/javascript";
		g.async = true;
		g.src = j;
		var h = document.getElementsByTagName("script")[0];
		h.parentNode.insertBefore(g, h)
	};
	var d = function() {
		if (c) {
			return
		}
		$(".dock_social_fb")
				.html(
						'<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com%2Fbookingcom&amp;send=false&amp;layout=button_count&amp;width=450&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:150px; height:21px;" allowTransparency="true"></iframe>');
		e("//platform.twitter.com/widgets.js");
		e("https://apis.google.com/js/plusone.js");
		c = true
	};
	var f = function() {
		$(".doc_social_link").mouseover(function() {
			d();
			var g = $(this).innerWidth();
			var h = Math.round(g / 2) - 16;
			$(".dock_social_block_angle").css("left", h);
			$(".dock_social_block").show()
		});
		$(".dock_social_block_remove").click(function() {
			$(".dock_social_block").hide()
		})
	};
	return {
		init : f
	}
}());
booking[sNSExperiments].social_plugins_two_new_footer_bars = {
	priority : 9,
	init : function() {
		booking.dockSocial.init()
	}
};
booking[sNSStartup].sort_popups = {
	priority : 9,
	anchorSelector : "#sort_by li.sort_stars > a, #sort_by li.sort_price > a, #sort_by li.review_score > a",
	ulSelector : "#sort_by li.with_dd ul",
	init : function() {
		$(this.anchorSelector).bind("click", function() {
			var c = $(this).siblings("ul");
			if (c.css("display") == "block") {
				booking[sNSStartup].sort_popups.hideSortPopups()
			} else {
				booking[sNSStartup].sort_popups.hideSortPopups();
				booking[sNSStartup].sort_popups.showPopup(c)
			}
			return false
		})
	},
	showPopup : function(c) {
		$(c).show();
		$(document).one("click", function() {
			booking[sNSStartup].sort_popups.hideSortPopups()
		})
	},
	hideSortPopups : function() {
		$(this.ulSelector).hide()
	}
};
if (typeof b_survey_url != "undefined" && b_survey_url) {
	booking[sNSStartup].survey = {
		priority : 9,
		init : function() {
			if (typeof b_site_experiment_stricter_qd_survey_cookie != "undefined"
					&& b_cookie && b_cookie.content_survey == "dontshow") {
				$("#survey").remove()
			} else {
				$("#survey").fadeIn("normal");
				var c = "/survey?";
				$("#survey button")
						.click(
								function(f) {
									var g = $(this).val();
									if (g) {
										if (g == "accept" || g == "Yes"
												|| g == "yes"
												|| g == "Ja, ik doe mee"
												|| g == "Okay") {
											var d = window.open(b_survey_url,
													"booking_survey_window")
										} else {
											if (typeof b_site_experiment_stricter_qd_survey_cookie != "undefined") {
												b_cookie = b_cookie || {};
												b_cookie.content_survey = "dontshow";
												if (typeof (JSON) != "undefined") {
													$
															.cookie(
																	"b",
																	JSON
																			.stringify(b_cookie),
																	{
																		expires : 30,
																		path : "/",
																		domain : booking.env.b_domain_end
																	})
												}
											}
											$("#survey").hide("normal")
										}
										if (!(typeof b_site_experiment_stricter_qd_survey_cookie != "undefined"
												&& b_cookie && b_cookie.content_survey == "dontshow")) {
											$.get(c + "decision=" + g
													+ "&survey_key="
													+ booking.env.survey_key,
													{}, function(e) {
														$("#survey").hide(
																"normal")
													})
										}
									}
									return false
								})
			}
		}
	}
}
booking[sNSExperiments].fb_likes = {
	priority : 9,
	likes : "",
	init : function() {
		var c = this;
		if (booking.env.b_action == "book") {
			this.likes = setInterval(
					function() {
						var d = booking.env.b_fb_id;
						if (window[d[5] + d[0]]) {
							booking.env
									.trackExperiment(booking.env.js_experiment_tracking.fb_likes);
							window.clearInterval(c.likes);
							c.likes = ""
						}
					}, 10000)
		}
	}
};
var seen_experiments = {};
function track_experiment(e) {
	var d = e.split(",");
	var c = [];
	$.each(d, function(f, g) {
		if (seen_experiments[g] == undefined) {
			c.push(g);
			seen_experiments[g] = true
		}
	});
	if (c.length > 0) {
		$.ajax({
			url : "/track_exp",
			type : "PUT",
			data : {
				exps : c.join(),
				sid : booking.env.b_sid,
				pid : booking.env.pageview_id,
				aid : booking.env.b_aid
			}
		})
	}
}
booking.trip_suggestion = (function() {
	var h = $(".trip_suggestion");
	var k = $(".slider_items", h);
	var f = $(".slider_nav li button", h);
	var d = $(".slider_nav #prev_month button", h);
	var o = $(".slider_nav #next_month button", h);
	var u = $(".slider_more li", h);
	var l = 0;
	var t = 0;
	var v = 0;
	var w = 0;
	var m = 1;
	var g;
	var n = function() {
		d.click(function() {
			j(1)
		});
		o.click(function() {
			j(-1)
		});
		u.click(function() {
			var x = $(this).index();
			c(x)
		});
		u.hover(function() {
			clearInterval(g)
		}, function() {
			q()
		});
		f.hover(function() {
			clearInterval(g)
		}, function() {
			q()
		});
		$(window).resize(function() {
			e();
			r();
			k.css("left", -1 * (l * w - (t - l)) + "px")
		});
		r();
		e();
		q()
	};
	var q = function() {
		(function x() {
			g = setTimeout(function() {
				j(-1);
				x()
			}, 5000)
		})()
	};
	var r = function() {
		t = l;
		v = k.find("li").length;
		first_element = k.find("li:first");
		l = parseInt(first_element.width()) + 2
				* parseInt(first_element.css("padding-right")) + 2
				* parseInt(first_element.css("border-right-width"))
				+ parseInt(first_element.css("margin-right"))
	};
	var e = function() {
		if (h.width() > (v * l + 40)) {
			o.hide()
		} else {
			o.show()
		}
	};
	var j = function(y) {
		r();
		var x = parseInt(y * l);
		w -= y;
		if ((m > 1 && m < v) || (m == 1 && y < 0) || (m === v && y > 0)) {
			m -= y;
			k.animate({
				left : "+=" + x
			}, 500)
		} else {
			if (m === v && y < 0) {
				m = 1;
				k.animate({
					left : "0"
				}, 500);
				w = 0
			}
		}
		if (m == 1) {
			d.hide()
		} else {
			d.show();
			o.show()
		}
	};
	var c = function(y) {
		r();
		var x = w - y;
		j(x)
	};
	return {
		init : n
	}
}());
booking[sNSExperiments].trip_suggestion = {
	priority : 1,
	init : function() {
		booking.trip_suggestion.init()
	}
};
booking[sNSExperiments].ufi_search_supplement = {
	priority : 9,
	init : function() {
		var c = 2;
		var e = 0;
		var f = $("#frm", $("#searchboxInc"));
		var d = function() {
			e++;
			f.animate({
				"background-color" : "#FFEEC0"
			}, function() {
				f.animate({
					"background-color" : "#FEBA02"
				}, function() {
					if (e <= c) {
						d()
					} else {
						e = 0
					}
				})
			})
		};
		$("#ufi_supplement_pick_dates").click(function() {
			d()
		})
	}
};
booking[sNSStartup].filterbox_loading = {
	priority : 9,
	loadpos : 0,
	savecheck : 0,
	init : function() {
		if (!booking.env.b_site_experiment_ajaxsearch2) {
			$(".filterelement")
					.click(
							function() {
								if ($(this).hasClass("active")) {
									$(this).removeClass("active")
								} else {
									$(this).addClass("active")
								}
								booking[sNSStartup].filterbox_loading.anim = setInterval(
										"booking[sNSStartup].filterbox_loading.loadanimation()",
										200);
								booking[sNSStartup].filterbox_loading
										.show(this.href);
								return false
							});
			$(".option").click(function() {
				$("#filterbox_overlay").show();
				return true
			})
		}
		return true
	},
	loadanimation : function() {
		this.loadpos = this.loadpos + 1;
		var c = booking[sNSStartup].filterbox_loading.loadpos * 34;
		if (this.loadpos > 15) {
			this.loadpos = 0;
			this.savecheck++;
			c = 0
		}
		document.getElementById("filterbox_overlay_animation").style.backgroundPosition = "-"
				+ c + "px 0px";
		if (this.savecheck > 3) {
			$("#filterbox_overlay").hide();
			clearInterval(this.anim)
		}
	},
	show : function(f) {
		var d = 0;
		if ($.browser.msie) {
			if ($.browser.version < 8) {
				d = -0.5
			} else {
				d = 7
			}
		}
		var e = $("#filterbox_options").height();
		if (e == 0) {
			e = 1
		}
		$("#filterbox_overlay").css("width", $("#filterbox_options").width())
				.css("height", e);
		$("#filterbox_overlay_image_container").css("top", e / 2 - 50);
		if (d != 0) {
			$("#filterbox_overlay").css("margin-left", d)
		}
		var c = $("#filterbox_overlay_loading");
		$("#filterbox_overlay").show();
		location.href = f;
		if ($.browser.msie) {
			c.attr("src", c.attr("src"))
		}
	}
};
booking[sNSStartup].fixMail = {
	priority : 9,
	init : function() {
		var c = this;
		$(".encrypted").each(function() {
			$(this).html(c.deCode($(this).text()));
			$(this).removeClass("encrypted")
		})
	},
	deCode : function(c) {
		return c.replace(/[a-zA-Z]/g, function(d) {
			return String.fromCharCode((d <= "Z" ? 90 : 122) >= (d = d
					.charCodeAt(0) + 13) ? d : d - 26)
		})
	}
};
function calcage(c, e, d) {
	s = ((Math.floor(c / e)) % d).toString();
	if (LeadingZero && s.length < 2) {
		s = "0" + s
	}
	return "<b>" + s + "</b>"
}
function CountBack(c) {
	if (c < 0) {
		if (document.getElementById("cntdwn")) {
			document.getElementById("cntdwn").innerHTML = FinishMessage;
			return
		}
	} else {
		if (c > 86400) {
			DisplayStr_days = DisplayFormat_days.replace(/%%D%%/g, calcage(c,
					86400, 100000));
			document.getElementById("flash_days").innerHTML = DisplayStr_days
		} else {
			document.getElementById("flash_days_wrapper").style.display = "none"
		}
	}
	DisplayStr_hours = DisplayFormat_hours.replace(/%%H%%/g, calcage(c, 3600,
			24));
	DisplayStr_minutes = DisplayFormat_minutes.replace(/%%M%%/g, calcage(c, 60,
			60));
	DisplayStr_seconds = DisplayFormat_seconds.replace(/%%S%%/g, calcage(c, 1,
			60));
	document.getElementById("flash_hours").innerHTML = DisplayStr_hours;
	document.getElementById("flash_minutes").innerHTML = DisplayStr_minutes;
	document.getElementById("flash_seconds").innerHTML = DisplayStr_seconds;
	if (CountActive) {
		setTimeout("CountBack(" + (c + CountStepper) + ")", SetTimeOutPeriod)
	}
}
if (typeof (TargetDate) == "undefined") {
	TargetDate = "12/31/2020 5:00 AM"
}
if (typeof (DisplayFormat) == "undefined") {
	DisplayFormat = "%%D%% Days, %%H%% Hours, %%M%% Minutes, %%S%% Seconds."
}
if (typeof (CountActive) == "undefined") {
	CountActive = true
}
if (typeof (FinishMessage) == "undefined") {
	FinishMessage = ""
}
if (typeof (CountStepper) != "number") {
	CountStepper = -1
}
if (typeof (LeadingZero) == "undefined") {
	LeadingZero = true
}
CountStepper = Math.ceil(CountStepper);
if (CountStepper == 0) {
	CountActive = false
}
var SetTimeOutPeriod = (Math.abs(CountStepper) - 1) * 1000 + 990;
var dthen = new Date(TargetDate);
var dnow = new Date();
if (CountStepper > 0) {
	ddiff = new Date(dnow - dthen)
} else {
	ddiff = new Date(dthen - dnow)
}
gsecs = Math.floor(ddiff.valueOf() / 1000);
if (document.getElementById("flash_seconds")) {
	CountBack(gsecs)
}
booking.ensureNamespaceExists("google");
booking.google.AjaxApiLoader = function() {
	var c = booking, e = c.env;
	function d(g) {
		var f = window.location.protocol;
		this.script = {
			_this : this,
			"@type" : "text/javascript",
			"@src" : f + "//www.google.com/jsapi?oe=utf-8&"
					+ e.b_google_maps_key_params
		};
		if (e.b_lang) {
			this.script["@src"] += ("&hl=" + e.b_lang)
		}
		if (g) {
			this.script["@src"] += ("&callback=" + g)
		}
	}
	return {
		loaded : false,
		load : function(f) {
			booking.google.AjaxApiLoader.loaded = true;
			return c.utils.buildHtmlNode(new d(f), document
					.getElementsByTagName("head")[0])
		}
	}
}();
booking[sNSStartupLoad].google_thumbnail_map = {
	priority : 9,
	init : function() {
		var c = $("#b_google_map_thumbnail").attr("data-map");
		if (c) {
			if (window.location.protocol.indexOf("s") != -1) {
				c = c.replace("http", "https")
			}
			$("#b_google_map_thumbnail").attr("style",
					"background-image: url(" + c + ");")
		}
		return true
	}
};
if (!Array.prototype.walk) {
	Array.prototype.walk = function(e) {
		var c = [], d = this.length;
		while (d--) {
			c.push(e(this[d]))
		}
		return c.reverse()
	}
}
if (!Array.prototype.flatten) {
	Array.prototype.flatten = function() {
		var d = [], e = -1, c = this.length;
		while (++e < c) {
			d = d.concat(this[e].constructor == Array ? this[e].flatten()
					: this[e])
		}
		return d
	}
}
if (!Array.indexOf) {
	Array.prototype.indexOf = function(d) {
		for ( var c = 0; c < this.length; c++) {
			if (this[c] == d) {
				return c
			}
		}
		return -1
	}
}
booking.ensureNamespaceExists("google");
booking.google.returnAnalyticsTrackingString = function() {
	var c = booking.env;
	var d = [];
	d[d.length] = c.b_this_urchin.replace(/&amp;$/, "");
	d[d.length] = "ur_aid=" + c.b_aid;
	d[d.length] = "ur_plang=" + c.b_lang_for_url;
	d[d.length] = "ur_gstcc=" + c.b_guest_country;
	if (c.b_search_category != "") {
		d[d.length] = "ur_scat=" + c.b_search_category
	}
	if (c.b_experiment_group) {
		d[d.length] = "ur_expgr=1"
	}
	if (c.b_action === "hotel") {
		if (c.b_hotel_blocks === 0 && c.b_checkin_date) {
			d[d.length] = "ur_honovail=1"
		} else {
			if (!c.b_checkin_date) {
				d[d.length] = "ur_honodat=1"
			} else {
				d[d.length] = "ur_hodat=1"
			}
		}
		d[d.length] = "ur_hocc1=" + c.b_countrycode;
		if (typeof c.b_label != "undefined"
				&& c.b_label.substr(0, 11) == "postbooking") {
			d[d.length] = "ur_postbknglabel=" + c.b_label
		}
	}
	if (c.b_action === "searchresults") {
		if (c.b_multiple_destinations_found) {
			d[d.length] = "ur_srdis=1"
		}
		if (c.b_availability_checked) {
			d[d.length] = "ur_srdat=1"
		}
	}
	if (c.b_context_details) {
		d[d.length] = c.b_context_details.walk(function(f) {
			return [ "rctp=" + f.b_type, "ur_srcid=" + f.b_code ]
		})
	}
	if (typeof b_first_seen != "undefined" && b_first_seen != "") {
		d[d.length] = "first_seen=" + b_first_seen
	}
	if (c.b_yahoo_param_keyword || c.b_yahoo_param_advert
			|| c.b_yahoo_param_campaign) {
		d[d.length] = "utm_source=yahoo";
		d[d.length] = "utm_medium=cpc";
		if (c.b_yahoo_param_keyword) {
			d[d.length] = "utm_term=" + c.b_yahoo_param_keyword
		}
		if (c.b_yahoo_param_advert) {
			d[d.length] = "utm_content=" + c.b_yahoo_param_advert
		}
		if (c.b_yahoo_param_campaign) {
			d[d.length] = "utm_campaign=" + c.b_yahoo_param_campaign
		}
	}
	return d.flatten().join("&amp;")
};
booking.ensureNamespaceExists("google");
var b_delayed_event = null;
booking.google.trackEvent = function(e, f, g, d, c) {
	if (typeof e != "undefined") {
		_gaq.push([ "_trackEvent", e, f, g, 1, true ])
	}
};
booking[sNSExperiments].event_tracking = {
	priority : 9,
	init : function() {
		if (typeof _gaq != "undefined") {
			booking.google.errorTracker = "Error";
			booking.google.clickTracker = "Click";
			booking.google.hoverTracker = "Hover";
			booking.google.mapTracker = "Map";
			booking.google.pageviewTracker = "Pageview";
			booking.google.viewTracker = "View";
			booking.google.cityTracker = "City";
			booking.google.groupTracker = "Group";
			booking.google.cardTracker = "Credit Card";
			booking.google.comparisonTracker = "Hotel Comparison";
			$("body")
					.delegate(
							"a, .trackit",
							"click",
							function() {
								var j = "";
								$(this).parents(".tracked").each(
										function() {
											j = (this.id) ? "#" + this.id
													+ " > " + j
													: (this.className) ? "."
															+ this.className
															+ " > " + j
															: this.tagName
																	+ " > " + j
										});
								if (j != "") {
									j = (this.id) ? j + "#" + this.id
											: (this.className) ? j + "."
													+ this.className : j + "a";
									booking.google.trackEvent(
											booking.google.clickTracker,
											"Action: " + booking.env.b_action,
											j);
									if (booking.env.b_site_experiment_clicktale_track_all_clicks) {
										ClickTaleTag("Click: " + j)
									}
								}
							});
			var h = $(".error, .errorSimpleMsg");
			for ( var f = 0; f < h.length; f++) {
				if (!$(this).hasClass("disabled")) {
					var e = h[f].getAttribute("rel");
					if (e != null) {
						booking.google.trackEvent(booking.google.errorTracker,
								"Display", e);
						if (typeof booking.env.b_site_experiment_clicktale != "undefined"
								&& booking.env.b_site_experiment_clicktale
								&& window.ClickTaleTag) {
							ClickTaleTag("error:" + e)
						}
					}
				}
			}
			if (typeof trigger_error404_event_tracking != "undefined"
					&& trigger_error404_event_tracking == true) {
				booking.google.trackEvent(booking.google.pageviewTracker,
						"404 Error", document.location.pathname
								+ document.location.search + "&from="
								+ document.referrer)
			}
			$(".filterbox a").click(
					function() {
						booking.google.trackEvent(booking.google.clickTracker,
								"Filter", this.getAttribute("data-id"))
					});
			$("#sort_by a").click(
					function() {
						booking.google.trackEvent(booking.google.clickTracker,
								"Sort", this.href.substr(this.href
										.indexOf("order=") + 6))
					});
			$("#ccfaq").click(
					function() {
						booking.google.trackEvent(booking.google.clickTracker,
								"Credit Card FAQ Popup", "View")
					});
			$(".track_register").click(
					function() {
						booking.google.trackEvent(booking.google.clickTracker,
								"Login", "Register")
					});
			$(".track_login").click(
					function() {
						booking.google.trackEvent(booking.google.clickTracker,
								"Login", "Login")
					});
			if (booking.env.b_action == "hotelcomparison") {
				$(".back").click(
						function() {
							booking.google.trackEvent(
									booking.google.comparisonTracker,
									"Previous Page", "Clicked")
						});
				$("h1 a, .hotel_comparison_header").click(
						function() {
							booking.google.trackEvent(
									booking.google.comparisonTracker,
									"Hotel Header", $(this).parent("td").eq(0)
											.attr("class"))
						});
				$(".bigbluebutton").click(
						function() {
							booking.google.trackEvent(
									booking.google.comparisonTracker,
									"Book Now Button", $(this).parent().attr(
											"class"))
						});
				$(".bigbluebutton.topbutton")
						.click(
								function() {
									booking.google
											.trackEvent(
													booking.google.comparisonTracker,
													"Top Book Now Button on comparison_colors_buttons",
													$(this).parent().attr(
															"class"))
								});
				$(".bigbluebutton.bottombutton2")
						.click(
								function() {
									booking.google
											.trackEvent(
													booking.google.comparisonTracker,
													"Bottom Book Now Button on comparison_colors_buttons",
													$(this).parent().attr(
															"class"))
								});
				$(".bigbluebutton.bottombutton")
						.click(
								function() {
									booking.google
											.trackEvent(
													booking.google.comparisonTracker,
													"Bottom Book Now Button on comparison_colors",
													$(this).parent().attr(
															"class"))
								});
				$(".remove_hotel").click(
						function() {
							booking.google.trackEvent(
									booking.google.comparisonTracker,
									"Remove and Replace", $(this).parent()
											.attr("class"))
						})
			}
			$("#bookconditions").click(
					function() {
						booking.google.trackEvent(booking.google.clickTracker,
								"Booking Conditions", "Link clicked")
					});
			$("#chat_click").click(
					function() {
						booking.google.trackEvent(booking.google.clickTracker,
								"Chat", "Request chat")
					})
		}
		if (typeof booking.env.b_site_experiment_clicktale != "undefined"
				&& booking.env.b_site_experiment_clicktale
				&& window.ClickTaleTag) {
			var h = $(".error");
			for ( var f = 0, c = h.length; f < c; f++) {
				if (h[f].offsetHeight > 0) {
					var e = h[f].getAttribute("rel");
					if (e != null) {
						ClickTaleTag("error: " + e)
					}
				}
			}
			if (booking.env.b_action == "hotel") {
				$("#searchboxInc .but button").click(function() {
					ClickTaleTag("Hotel page search")
				});
				var g = $("#photos_distinct").width() - 240;
				if ($("#reviewFloater").length) {
					g -= $("#reviewFloater").width()
				}
				var d = $("#photos_distinct img").length * 43;
				ClickTaleTag(Math.ceil(d / g) + " photo rows");
				if (booking.env.b_desc_num_words) {
					if (booking.env.b_desc_num_words <= 95) {
						ClickTaleTag("words: small")
					} else {
						if (booking.env.b_desc_num_words > 120) {
							ClickTaleTag("words: long")
						} else {
							ClickTaleTag("words: mid")
						}
					}
				}
				if (document.getElementById("reviewFloater")) {
					ClickTaleTag("Has positive review")
				}
			}
		}
		return true
	}
};
booking[sNSStartup].google_pageview_tracker = {
	priority : 9,
	init : function() {
		if (typeof booking.env.google_analytics_tracking_enabled != "undefined"
				&& booking.env.google_analytics_tracking_enabled) {
			$(
					'div#survey[surveykey="' + booking.env.survey_key
							+ '"] button[value="accept"]').click(function() {
				_gaq.push([ "_trackPageview", booking.env.surveytracklink ])
			});
			if (booking.env.b_action == "general") {
				$("a#jobsite").click(function() {
					_gaq.push([ "_trackPageview", "/outgoinglink/jobsite" ])
				})
			}
			$("#iphone_app_itunes_link_1, #iphone_app_itunes_link_2").click(
					function() {
						_gaq.push([ "_trackPageview",
								"/outgoinglink/iphone_app_promo/itunes" ])
					});
			$("#review_useful_share a").click(
					function() {
						var c;
						this.id == "share_any_review_fb" ? c = "facebook"
								: c = "twitter";
						c += "/" + this.getAttribute("data-id");
						_gaq.push([ "_trackPageview",
								"/outgoinglink/socnet_share/review_v2/" + c ]);
						_gaq.push([ "_trackSocial", c, "Share Review" ])
					});
			$("#flash_bookmark_home").click(
					function() {
						_gaq.push([ "_trackPageview",
								"/outgoinglink/flashdeals/bookmark" ])
					});
			$(".priceline_ext_link").click(
					function() {
						_gaq.push([ "_trackPageview",
								"/outgoinglink/priceline_name_your_price" ])
					});
			$(".facebook_after_signup").click(
					function() {
						_gaq.push([ "_trackPageview",
								"/outgoinglink/facebook_after_signup" ])
					});
			$("#share_popup_inner a")
					.click(
							function() {
								var c = "hotel_share_popup/base/";
								if (booking.env.b_site_experiment_fb_send_button) {
									c = "fb_send_button/v"
											+ booking.env.b_site_experiment_fb_send_button.v
											+ "/"
								}
								if (this.id == "share_popup_fb") {
									c += "facebook"
								} else {
									if (this.id == "share_popup_t") {
										c += "twitter"
									} else {
										c += "mail_a_friend"
									}
								}
								_gaq.push([ "_trackPageview",
										"/outgoinglink/socnet_share/" + c ]);
								_gaq.push([ "_trackSocial", c, "Share" ])
							});
			if (booking.env.b_site_experiment_fb_send_button) {
				$("#fb_hotel_info_shares a").click(
						function() {
							var c = "fb_send_button/v2/";
							if (this.id == "share_popup_fb") {
								c += "facebook"
							} else {
								c += "twitter"
							}
							_gaq.push([ "_trackPageview",
									"/outgoinglink/socnet_share/" + c ]);
							_gaq.push([ "_trackSocial", c, "Share" ])
						})
			}
			$("#share_hotel_history a").click(
					function() {
						var c;
						if (this.id == "share_hotel_history_fb") {
							c = "facebook"
						} else {
							if (this.id == "share_hotel_history_t") {
								c = "twitter"
							} else {
								c = "mail_a_friend"
							}
						}
						_gaq
								.push([
										"_trackPageview",
										"/outgoinglink/socnet_share/hotel_history/"
												+ c ]);
						_gaq.push([ "_trackSocial", c, "Share History" ])
					});
			if (booking.env.b_action == "index") {
				$("#number_one_promotion #wua_link_logo").click(function() {
					_gaq.push([ "_trackPageview", "/outgoinglink/wua-1" ])
				});
				$("#number_one_promotion #link_jobsite_nl").click(
						function() {
							_gaq.push([ "_trackPageview",
									"/outgoinglink/jobsite_promo_nl" ])
						})
			}
			if (booking.env.b_action == "confirmation") {
				$("#social_share_links a").click(
						function() {
							var c = "base";
							if (this.id == "social_share_conf_facebook") {
								c += "/facebook";
								sn = "facebook"
							} else {
								c += "/twitter";
								sn = "twitter"
							}
							_gaq.push([
									"_trackPageview",
									"/outgoinglink/socnet_share/confirmation/"
											+ c ]);
							_gaq.push([ "_trackSocial", sn,
									"Share Confirmation" ])
						});
				if (booking.env.b_site_experiment_external_review_invite) {
					$("#external_review_invite_link")
							.click(
									function() {
										_gaq
												.push([ "_trackPageview",
														"/outgoinglink/confirmation/external_review_invite/" ])
									})
				}
			}
		}
	}
};
(function(c) {
	c.idleTimer = function(m, e) {
		var f = false, j = true, k = 30000, n = "mousemove keydown DOMMouseScroll mousewheel mousedown touchstart touchmove";
		e = e || document;
		var h = function(t) {
			if (typeof t === "number") {
				t = undefined
			}
			var r = c.data(t || e, "idleTimerObj");
			r.idle = !r.idle;
			var o = (+new Date()) - r.olddate;
			r.olddate = +new Date();
			if (r.idle && (o < k)) {
				r.idle = false;
				clearTimeout(c.idleTimer.tId);
				if (j) {
					c.idleTimer.tId = setTimeout(h, k)
				}
				return
			}
			var q = jQuery.Event(c.data(e, "idleTimer", r.idle ? "idle"
					: "active")
					+ ".idleTimer");
			q.stopPropagation();
			c(e).trigger(q)
		}, l = function(o) {
			var q = c.data(o, "idleTimerObj");
			q.enabled = false;
			clearTimeout(q.tId);
			c(o).unbind(".idleTimer")
		}, d = function() {
			var o = c.data(this, "idleTimerObj");
			clearTimeout(o.tId);
			if (o.enabled) {
				if (o.idle) {
					h(this)
				}
				o.tId = setTimeout(h, o.timeout)
			}
		};
		var g = c.data(e, "idleTimerObj") || {};
		g.olddate = g.olddate || +new Date();
		if (typeof m === "number") {
			k = m
		} else {
			if (m === "destroy") {
				l(e);
				return this
			} else {
				if (m === "getElapsedTime") {
					return (+new Date()) - g.olddate
				}
			}
		}
		c(e).bind(c.trim((n + " ").split(" ").join(".idleTimer ")), d);
		g.idle = f;
		g.enabled = j;
		g.timeout = k;
		g.tId = setTimeout(h, g.timeout);
		c.data(e, "idleTimer", "active");
		c.data(e, "idleTimerObj", g)
	};
	c.fn.idleTimer = function(d) {
		if (this[0]) {
			c.idleTimer(d, this[0])
		}
		return this
	}
})(jQuery);
booking[sNSStartup].ie6_content_width = {
	priority : 9,
	init : function() {
		if ($("html.b_msie_6").length) {
			$(window)
					.resize(
							function() {
								var c = document.documentElement.clientWidth;
								document.getElementById("bodyconstraint-inner").style.width = (c < 630) ? "630px"
										: ((c > 1094) ? "1094px" : (c - 20)
												+ "px")
							})
		}
	}
};
booking[sNSStartup].ipad = {
	priority : 9,
	init : function() {
		if (typeof booking.env.b_site_experiment_ipad_improvements != "undefined"
				&& booking.env.b_site_experiment_ipad_improvements) {
			$("label[for]").click(
					function() {
						var c = $(this).attr("for");
						if ($(
								"#" + c + "[type=radio], #" + c
										+ "[type=checkbox]").attr("selected",
								!$("#" + c).attr("selected"))) {
							return
						} else {
							$("#" + c)[0].focus()
						}
					})
		}
	}
};
jQuery.cookie = function(d, l, o) {
	if (typeof l != "undefined") {
		o = o || {};
		if (l === null) {
			l = "";
			o = $.extend({}, o);
			o.expires = -1
		}
		var g = "";
		if (o.expires
				&& (typeof o.expires == "number" || o.expires.toUTCString)) {
			var h;
			if (typeof o.expires == "number") {
				h = new Date();
				h.setTime(h.getTime() + (o.expires * 24 * 60 * 60 * 1000))
			} else {
				h = o.expires
			}
			g = "; expires=" + h.toUTCString()
		}
		var n = o.path ? "; path=" + (o.path) : "";
		var j = o.domain ? "; domain=" + (o.domain) : "";
		var c = o.secure ? "; secure" : "";
		document.cookie = [ d, "=", encodeURIComponent(l), g, n, j, c ]
				.join("")
	} else {
		var f = null;
		if (document.cookie && document.cookie != "") {
			var m = document.cookie.split(";");
			for ( var k = 0; k < m.length; k++) {
				var e = jQuery.trim(m[k]);
				if (e.substring(0, d.length + 1) == (d + "=")) {
					f = decodeURIComponent(e.substring(d.length + 1));
					break
				}
			}
		}
		return f
	}
};
(function(c) {
	c.fn.hint = function(d) {
		if (!d) {
			d = "blur"
		}
		return this
				.each(function() {
					var j = c(this), g = j.attr("title"), f = c(this.form), h = c(window);
					function e() {
						if (j.val() === g && j.hasClass(d)) {
							j.val("").removeClass(d)
						}
					}
					if (g) {
						j.blur(function() {
							if (this.value === "") {
								j.val(g).addClass(d)
							}
						}).focus(e).blur();
						f.submit(e);
						h.unload(e)
					}
				})
	}
})(jQuery);
$("input#destination:text").hint();
(function(c) {
	c
			.extend({
				noticeAdd : function(f) {
					var j = {
						inEffect : {
							opacity : "show"
						},
						inEffectDuration : 600,
						stayTime : 3000,
						text : "",
						stay : false,
						type : "notice",
						destination : "",
						platform : "mac"
					};
					var f, k, h, g, e, d;
					f = c.extend({}, j, f);
					if (typeof booking.env.b_site_experiment_ipad_improvements != "undefined"
							&& booking.env.b_site_experiment_ipad_improvements) {
						return
					}
					if (navigator && navigator.platform
							&& navigator.platform.indexOf("Mac") == -1) {
						f.platform = booking.env.b_site_experiment_dock_my_hotels ? "win win_dock"
								: "win"
					}
					k = (!c(".notice-wrap").length) ? c("<div></div>")
							.addClass("notice-wrap").addClass(f.platform)
							.appendTo("body") : c(".notice-wrap");
					h = c("<div></div>").addClass("notice-item-wrapper");
					d = (f.destination == "") ? "<p>" + f.text + "</p>"
							: '<p><a href="' + f.destination + '">' + f.text
									+ "</a></p>";
					if (f.close == "all") {
						g = c("<div></div>")
								.hide()
								.addClass("notice-item " + f.type)
								.appendTo(k)
								.html(d)
								.animate(f.inEffect, f.inEffectDuration)
								.wrap(h)
								.click(
										function() {
											if (booking.env.js_experiment_tracking.growl_not_show_on_close
													&& booking.env.js_experiment_tracking.growl_not_show_on_close != "") {
												booking.env
														.trackExperiment(booking.env.js_experiment_tracking.growl_not_show_on_close);
												if (booking.env.b_site_experiment_growl_not_show_on_close) {
													var l = JSON.parse($
															.cookie("bs"))
															|| {};
													l.gc = 1;
													if (typeof (JSON) != "undefined") {
														$
																.cookie(
																		"bs",
																		JSON
																				.stringify(l),
																		{
																			path : "/",
																			domain : booking.env.b_domain_end
																		})
													}
												}
											}
											c.noticeRemove(g);
											return false
										});
						e = c("<div></div>").addClass("notice-item-close-x")
								.prependTo(g)
					} else {
						g = c("<div></div>").hide().addClass(
								"notice-item " + f.type).appendTo(k).html(d)
								.animate(f.inEffect, f.inEffectDuration)
								.wrap(h);
						e = c("<div></div>")
								.addClass("notice-item-close")
								.prependTo(g)
								.html("x")
								.click(
										function() {
											c.noticeRemove(g);
											if (f.type == "language") {
												if (typeof (b_cookie) == "undefined") {
													b_cookie = {}
												}
												b_cookie.langPrompt = "dontshow";
												if (typeof (JSON) != "undefined") {
													$
															.cookie(
																	"b",
																	JSON
																			.stringify(b_cookie),
																	{
																		expires : 30,
																		path : "/",
																		domain : booking.env.b_domain_end
																	})
												}
											}
											return false
										})
					}
					if (f.type == "language") {
						$(".notice-item p").css("cursor", "pointer");
						$(".notice-item p").click(
								function() {
									$("#langselectformlist").val(
											booking.env.browser_lang);
									$("#languageselect")[0].submit();
									c.noticeRemove(g);
									return false
								})
					}
					if (navigator.userAgent.match(/MSIE 6/i)) {
						k.css({
							top : document.documentElement.scrollTop
						})
					}
					if (!f.stay) {
						setTimeout(function() {
							c.noticeRemove(g)
						}, f.stayTime)
					}
				},
				noticeAddBig : function(e) {
					var h = {
						inEffect : {
							opacity : "show"
						},
						inEffectDuration : 600,
						stayTime : 3000,
						text : "",
						stay : false,
						type : "notice"
					};
					var e, j, g, f, d;
					e = c.extend({}, h, e);
					j = (!c(".notice-wrap").length) ? c("<div></div>")
							.addClass("notice-wrap").appendTo("body")
							: c(".notice-wrap");
					g = c("<div></div>").addClass("notice-item-wrapper");
					f = c("<div></div>").hide().addClass(
							"notice-item-big " + e.type).appendTo(j).html(
							"<p>" + e.text + "</p>").animate(e.inEffect,
							e.inEffectDuration).wrap(g);
					d = c("<div></div>").addClass("notice-item-close")
							.prependTo(f).html("x").click(function() {
								c.noticeRemove(f)
							});
					if (navigator.userAgent.match(/MSIE 6/i)) {
						j.css({
							top : document.documentElement.scrollTop
						})
					}
					if (!e.stay) {
						setTimeout(function() {
							c.noticeRemove(f)
						}, e.stayTime)
					}
				},
				noticeRemove : function(d) {
					d.animate({
						opacity : "0"
					}, 600, function() {
						d.parent().animate({
							height : "0px"
						}, 300, function() {
							d.parent().remove()
						})
					})
				}
			})
})(jQuery);
jQuery.fn.pulse = function(c, f, d, j, l) {
	if (isNaN(d)) {
		l = j;
		j = d;
		d = 1
	}
	var k = jQuery.speed(f, j, l), h = k.queue !== false, g = 0;
	for ( var e in c) {
		g = Math.max(c[e].length, g)
	}
	k.times = k.times || d;
	return this[h ? "queue" : "each"](function() {
		var o = {}, n = jQuery.extend({}, k), m = jQuery(this);
		q();
		function q() {
			var u = {}, r = false;
			for ( var t in c) {
				o[t] = o[t] || {
					runs : 0,
					cur : -1
				};
				if (o[t].cur < c[t].length - 1) {
					++o[t].cur
				} else {
					o[t].cur = 0;
					++o[t].runs
				}
				if (c[t].length === g) {
					r = n.times > o[t].runs
				}
				u[t] = c[t][o[t].cur]
			}
			n.complete = q;
			n.queue = false;
			if (r) {
				m.animate(u, n)
			} else {
				k.complete.call(m[0])
			}
		}
	})
};
(function(f) {
	var c = f.scrollTo = function(d, g, h) {
		f(window).scrollTo(d, g, h)
	};
	c.defaults = {
		axis : "xy",
		duration : parseFloat(f.fn.jquery) >= 1.3 ? 0 : 1
	};
	c.window = function(d) {
		return f(window)._scrollable()
	};
	f.fn._scrollable = function() {
		return this.map(function() {
			var d = this, g = !d.nodeName
					|| f.inArray(d.nodeName.toLowerCase(), [ "iframe",
							"#document", "html", "body" ]) != -1;
			if (!g) {
				return d
			}
			var h = (d.contentWindow || d).document || d.ownerDocument || d;
			return f.browser.safari || h.compatMode == "BackCompat" ? h.body
					: h.documentElement
		})
	};
	f.fn.scrollTo = function(h, g, d) {
		if (typeof g == "object") {
			d = g;
			g = 0
		}
		if (typeof d == "function") {
			d = {
				onAfter : d
			}
		}
		if (h == "max") {
			h = 9000000000
		}
		d = f.extend({}, c.defaults, d);
		g = g || d.speed || d.duration;
		d.queue = d.queue && d.axis.length > 1;
		if (d.queue) {
			g /= 2
		}
		d.offset = e(d.offset);
		d.over = e(d.over);
		return this
				._scrollable()
				.each(
						function() {
							var v = this, n = f(v), o = h, l, m = {}, j = n
									.is("html,body");
							switch (typeof o) {
							case "number":
							case "string":
								if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(o)) {
									o = e(o);
									break
								}
								o = f(o, this);
							case "object":
								if (o.is || o.style) {
									l = (o = f(o)).offset()
								}
							}
							f
									.each(
											d.axis.split(""),
											function(t, u) {
												var x = u == "x" ? "Left"
														: "Top", w = x
														.toLowerCase(), z = "scroll"
														+ x, r = v[z], q = c
														.max(v, u);
												if (l) {
													m[z] = l[w]
															+ (j ? 0
																	: r
																			- n
																					.offset()[w]);
													if (d.margin) {
														m[z] -= parseInt(o
																.css("margin"
																		+ x)) || 0;
														m[z] -= parseInt(o
																.css("border"
																		+ x
																		+ "Width")) || 0
													}
													m[z] += d.offset[w] || 0;
													if (d.over[w]) {
														m[z] += o[u == "x" ? "width"
																: "height"]()
																* d.over[w]
													}
												} else {
													var y = o[w];
													m[z] = y.slice
															&& y.slice(-1) == "%" ? parseFloat(y)
															/ 100 * q
															: y
												}
												if (/^\d+$/.test(m[z])) {
													m[z] = m[z] <= 0 ? 0 : Math
															.min(m[z], q)
												}
												if (!t && d.queue) {
													if (r != m[z]) {
														k(d.onAfterFirst)
													}
													delete m[z]
												}
											});
							k(d.onAfter);
							function k(q) {
								n.animate(m, g, d.easing, q && function() {
									q.call(this, h, d)
								})
							}
						}).end()
	};
	c.max = function(j, k) {
		var o = k == "x" ? "Width" : "Height", n = "scroll" + o;
		if (!f(j).is("html,body")) {
			return j[n] - f(j)[o.toLowerCase()]()
		}
		var q = "client" + o, g = j.ownerDocument.documentElement, d = j.ownerDocument.body;
		return Math.max(g[n], d[n]) - Math.min(g[q], d[q])
	};
	function e(d) {
		return typeof d == "object" ? d : {
			top : d,
			left : d
		}
	}
})(jQuery);
(function(g) {
	var d = {
		transparent : 16777216,
		aliceblue : 15792383,
		antiquewhite : 16444375,
		aqua : 65535,
		aquamarine : 8388564,
		azure : 15794175,
		beige : 16119260,
		bisque : 16770244,
		black : 0,
		blanchedalmond : 16772045,
		blue : 255,
		blueviolet : 9055202,
		brown : 10824234,
		burlywood : 14596231,
		cadetblue : 6266528,
		chartreuse : 8388352,
		chocolate : 13789470,
		coral : 16744272,
		cornflowerblue : 6591981,
		cornsilk : 16775388,
		crimson : 14423100,
		cyan : 65535,
		darkblue : 139,
		darkcyan : 35723,
		darkgoldenrod : 12092939,
		darkgray : 11119017,
		darkgreen : 25600,
		darkgrey : 11119017,
		darkkhaki : 12433259,
		darkmagenta : 9109643,
		darkolivegreen : 5597999,
		darkorange : 16747520,
		darkorchid : 10040012,
		darkred : 9109504,
		darksalmon : 15308410,
		darkseagreen : 9419919,
		darkslateblue : 4734347,
		darkslategray : 3100495,
		darkslategrey : 3100495,
		darkturquoise : 52945,
		darkviolet : 9699539,
		deeppink : 16716947,
		deepskyblue : 49151,
		dimgray : 6908265,
		dimgrey : 6908265,
		dodgerblue : 2003199,
		firebrick : 11674146,
		floralwhite : 16775920,
		forestgreen : 2263842,
		fuchsia : 16711935,
		gainsboro : 14474460,
		ghostwhite : 16316671,
		gold : 16766720,
		goldenrod : 14329120,
		gray : 8421504,
		green : 32768,
		greenyellow : 11403055,
		grey : 8421504,
		honeydew : 15794160,
		hotpink : 16738740,
		indianred : 13458524,
		indigo : 4915330,
		ivory : 16777200,
		khaki : 15787660,
		lavender : 15132410,
		lavenderblush : 16773365,
		lawngreen : 8190976,
		lemonchiffon : 16775885,
		lightblue : 11393254,
		lightcoral : 15761536,
		lightcyan : 14745599,
		lightgoldenrodyellow : 16448210,
		lightgray : 13882323,
		lightgreen : 9498256,
		lightgrey : 13882323,
		lightpink : 16758465,
		lightsalmon : 16752762,
		lightseagreen : 2142890,
		lightskyblue : 8900346,
		lightslategray : 7833753,
		lightslategrey : 7833753,
		lightsteelblue : 11584734,
		lightyellow : 16777184,
		lime : 65280,
		limegreen : 3329330,
		linen : 16445670,
		magenta : 16711935,
		maroon : 8388608,
		mediumaquamarine : 6737322,
		mediumblue : 205,
		mediumorchid : 12211667,
		mediumpurple : 9662683,
		mediumseagreen : 3978097,
		mediumslateblue : 8087790,
		mediumspringgreen : 64154,
		mediumturquoise : 4772300,
		mediumvioletred : 13047173,
		midnightblue : 1644912,
		mintcream : 16121850,
		mistyrose : 16770273,
		moccasin : 16770229,
		navajowhite : 16768685,
		navy : 128,
		oldlace : 16643558,
		olive : 8421376,
		olivedrab : 7048739,
		orange : 16753920,
		orangered : 16729344,
		orchid : 14315734,
		palegoldenrod : 15657130,
		palegreen : 10025880,
		paleturquoise : 11529966,
		palevioletred : 14381203,
		papayawhip : 16773077,
		peachpuff : 16767673,
		peru : 13468991,
		pink : 16761035,
		plum : 14524637,
		powderblue : 11591910,
		purple : 8388736,
		red : 16711680,
		rosybrown : 12357519,
		royalblue : 4286945,
		saddlebrown : 9127187,
		salmon : 16416882,
		sandybrown : 16032864,
		seagreen : 3050327,
		seashell : 16774638,
		sienna : 10506797,
		silver : 12632256,
		skyblue : 8900331,
		slateblue : 6970061,
		slategray : 7372944,
		slategrey : 7372944,
		snow : 16775930,
		springgreen : 65407,
		steelblue : 4620980,
		tan : 13808780,
		teal : 32896,
		thistle : 14204888,
		tomato : 16737095,
		turquoise : 4251856,
		violet : 15631086,
		wheat : 16113331,
		white : 16777215,
		whitesmoke : 16119285,
		yellow : 16776960,
		yellowgreen : 10145074
	};
	var k = Math.round;
	var c = Math.floor;
	var j = Math.sqrt;
	var f = Math.min;
	var e = Math.max;
	var h = Math.random;
	function n(r) {
		function q(w, v) {
			var u;
			if (undefined === v) {
				w = parseInt(w, 10);
				v = 255;
				u = 255
			} else {
				if (1 === v) {
					if (undefined === w) {
						return 1
					}
					v = 100;
					u = 1
				} else {
					u = v
				}
				w = parseFloat(w)
			}
			if (isNaN(w) || w <= 0) {
				return 0
			}
			if (v < w) {
				return u
			}
			if (w <= 1) {
				if (u === 1) {
					return w
				} else {
					return (w * u) | 0
				}
			}
			return (w * u / v)
		}
		function t(A, z, w) {
			A = q(A, 360) / 360;
			z = q(z, 1);
			w = q(w, 1);
			if (0 == z) {
				w = k(w * 255);
				return [ w, w, w ]
			}
			function y(C, B, v) {
				if (v < 0) {
					v++
				}
				if (v > 1) {
					v--
				}
				if (6 * v < 1) {
					return C + (B - C) * 6 * v
				}
				if (2 * v < 1) {
					return B
				}
				if (3 * v < 2) {
					return C + (B - C) * (4 - 6 * v)
				}
				return C
			}
			var x = w < 0.5 ? (w * (1 + z)) : (w + z - w * z);
			var u = w + w - x;
			return [ k(255 * y(u, x, A + 1 / 3)), k(255 * y(u, x, A)),
					k(255 * y(u, x, A - 1 / 3)) ]
		}
		function o(z, y, w) {
			z = q(z, 360) / 60;
			y = q(y, 1);
			w = q(w, 1);
			var x = c(z);
			var A = z - x;
			if (!(x & 1)) {
				A = 1 - A
			}
			var u = k(255 * (w * (1 - y)));
			var B = k(255 * (w * (1 - y * A)));
			w = k(255 * w);
			switch (x) {
			case 6:
			case 0:
				return [ w, B, u ];
			case 1:
				return [ B, w, u ];
			case 2:
				return [ u, w, B ];
			case 3:
				return [ u, B, w ];
			case 4:
				return [ B, u, w ];
			case 5:
				return [ w, u, B ]
			}
		}
		this.setColor = function(u) {
			this.success = true;
			if (typeof u === "number") {
				this.a = ((u >> 24) & 255) / 255;
				this.r = (u >> 16) & 255;
				this.g = (u >> 8) & 255;
				this.b = (u) & 255;
				return
			}
			if (typeof u === "object") {
				if (u[0] !== undefined && u[1] !== undefined
						&& u[2] !== undefined) {
					this.a = q(u[3], 1);
					this.r = q(u[0]);
					this.g = q(u[1]);
					this.b = q(u[2]);
					return
				} else {
					if (u.r !== undefined && u.g !== undefined
							&& u.b !== undefined) {
						this.a = q(u.a, 1);
						this.r = q(u.r);
						this.g = q(u.g);
						this.b = q(u.b);
						return
					} else {
						if (u.v !== undefined && u.h !== undefined
								&& u.s !== undefined) {
							var w = o(u.h, u.s, u.v, 1);
							this.a = q(u.a, 1);
							this.r = w[0];
							this.g = w[1];
							this.b = w[2];
							return
						} else {
							if (u.l !== undefined && u.h !== undefined
									&& u.s !== undefined) {
								var w = t(u.h, u.s, u.l, 1);
								this.a = q(u.a, 1);
								this.r = w[0];
								this.g = w[1];
								this.b = w[2];
								return
							}
						}
					}
				}
			}
			if (typeof u !== "string") {
				this.success = false;
				return
			}
			u = u.toLowerCase().replace(/[^a-z0-9,.()#%]/g, "");
			var v, y;
			if (undefined !== d[u]) {
				y = d[u];
				this.a = (!((y >> 24) & 255)) | 0;
				this.r = ((y >> 16) & 255);
				this.g = ((y >> 8) & 255);
				this.b = ((y) & 255);
				return
			}
			if (v = /^([1-9]\d*)$/.exec(u)) {
				y = parseInt(v[1], 10);
				this.a = (((y >> 24) & 255) || 255) / 255;
				this.r = ((y >> 16) & 255);
				this.g = ((y >> 8) & 255);
				this.b = ((y) & 255);
				return
			}
			if (v = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/.exec(u)) {
				this.a = 1;
				this.r = parseInt(v[1], 16);
				this.g = parseInt(v[2], 16);
				this.b = parseInt(v[3], 16);
				return
			}
			if (v = /^#?([0-9a-f])([0-9a-f])([0-9a-f])$/.exec(u)) {
				this.a = 1;
				this.r = parseInt(v[1] + v[1], 16);
				this.g = parseInt(v[2] + v[2], 16);
				this.b = parseInt(v[3] + v[3], 16);
				return
			}
			if (v = /^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?\)$/
					.exec(u)) {
				this.a = q(v[5], 1);
				this.r = q(v[1]);
				this.g = q(v[2]);
				this.b = q(v[3]);
				return
			}
			if (v = /^rgba?\(([0-9.]+\%),([0-9.]+\%),([0-9.]+\%)(,([0-9.]+)\%?)?\)$/
					.exec(u)) {
				this.a = q(v[5], 1);
				this.r = k(q(v[1], 100) * 2.55);
				this.g = k(q(v[2], 100) * 2.55);
				this.b = k(q(v[3], 100) * 2.55);
				return
			}
			if (v = /^hs([bvl])a?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?\)$/
					.exec(u)) {
				var x;
				if (v[1] == "l") {
					x = t
				} else {
					x = o
				}
				y = x(parseInt(v[2], 10), parseInt(v[3], 10),
						parseInt(v[4], 10));
				this.a = q(v[6], 1);
				this.r = y[0];
				this.g = y[1];
				this.b = y[2];
				return
			}
			if (v = /^(\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?$/.exec(u)) {
				this.a = q(v[5], 1);
				this.r = q(v[1]);
				this.g = q(v[2]);
				this.b = q(v[3]);
				return
			}
			this.success = false
		};
		this.getColor = function(u) {
			if (undefined !== u) {
				switch (u.toLowerCase()) {
				case "rgb":
					return this.getRGB();
				case "hsv":
				case "hsb":
					return this.getHSV();
				case "hsl":
					return this.getHSL();
				case "int":
					return this.getInt();
				case "array":
					return this.getArray();
				case "fraction":
					return this.getFraction();
				case "css":
				case "style":
					return this.getCSS();
				case "name":
					return this.getName()
				}
			}
			return this.getHex()
		};
		this.getRGB = function() {
			if (this.success) {
				return {
					r : this.r,
					g : this.g,
					b : this.b,
					a : this.a
				}
			}
			return null
		};
		this.getCSS = function() {
			if (this.success) {
				if (this.a == 1) {
					return "rgb(" + this.r + ", " + this.g + ", " + this.b
							+ ")"
				}
				return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", "
						+ this.a + ")"
			}
			return null
		};
		this.getArray = function() {
			if (this.success) {
				return [ this.r, this.g, this.b, this.a ]
			}
			return null
		};
		this.getName = function() {
			if (this.success) {
				var v = null;
				var x;
				var A = d;
				var w = this.getHSL();
				for ( var z in A) {
					var u = new n(A[z]).getHSL();
					var y = j(0.5 * (w.h - u.h) * (w.h - u.h) + 0.5
							* (w.s - u.s) * (w.s - u.s) + (w.l - u.l)
							* (w.l - u.l));
					if (null === v || y < v) {
						v = y;
						x = z
					}
				}
				return x
			}
			return null
		};
		this.getFraction = function() {
			if (this.success) {
				return {
					r : this.r / 255,
					g : this.g / 255,
					b : this.b / 255,
					a : this.a
				}
			}
			return null
		};
		this.getHSL = function() {
			if (this.success) {
				var u = this.r / 255;
				var y = this.g / 255;
				var z = this.b / 255;
				var w = f(u, y, z);
				var A = e(u, y, z);
				var B = A - w;
				var x, C, v = (A + w) / 2;
				if (0 == B) {
					x = 0;
					C = 0
				} else {
					if (v < 0.5) {
						C = B / (A + w)
					} else {
						C = B / (2 - (A + w))
					}
					if (A == u) {
						x = (y - z) / B
					} else {
						if (A == y) {
							x = 2 + (z - u) / B
						} else {
							if (A == z) {
								x = 4 + (u - y) / B
							}
						}
					}
					if (x < 0) {
						x += 6
					}
				}
				return {
					h : k(x * 60),
					s : k(C * 100),
					l : k(v * 100),
					a : this.a
				}
			}
			return null
		};
		this.getHSV = function() {
			if (this.success) {
				var u = this.r / 255;
				var A = this.g / 255;
				var C = this.b / 255;
				var y = f(u, A, C);
				var D = e(u, A, C);
				var F = D - y;
				var z, G, E = D;
				if (0 == F) {
					z = 0;
					G = 0
				} else {
					G = F / D;
					F *= 6;
					var B = 0.5 + (D - u) / F;
					var w = 0.5 + (D - A) / F;
					var x = 0.5 + (D - C) / F;
					if (u == D) {
						z = x - w
					} else {
						if (A == D) {
							z = 1 / 3 + B - x
						} else {
							if (C == D) {
								z = 2 / 3 + w - B
							}
						}
					}
					if (z < 0) {
						z++
					}
					if (z > 1) {
						z--
					}
				}
				return {
					h : k(z * 360),
					s : k(G * 100),
					v : k(E * 100),
					a : this.a
				}
			}
			return null
		};
		this.getHex = function() {
			if (this.success) {
				var A = "0123456789abcdef";
				var y = this.r >> 4;
				var x = this.g >> 4;
				var z = this.b >> 4;
				var v = this.r & 15;
				var u = this.g & 15;
				var w = this.b & 15;
				if (0 == ((y ^ v) | (x ^ u) | (z ^ w))) {
					return "#" + A.charAt(y) + A.charAt(x) + A.charAt(z)
				}
				return "#" + A.charAt(y) + A.charAt(v) + A.charAt(x)
						+ A.charAt(u) + A.charAt(z) + A.charAt(w)
			}
			return null
		};
		this.getInt = function() {
			if (this.success) {
				return (this.r << 16 ^ this.g << 8 ^ this.b) & 16777215
			}
			return null
		};
		this.toString = function() {
			return this.getHex()
		};
		this.setColor(r)
	}
	g.each([ "color", "backgroundColor", "borderColor", "borderTopColor",
			"borderBottomColor", "borderLeftColor", "borderRightColor",
			"outlineColor" ], function(q, o) {
		if (!g.fx) {
			g.fx = {}
		}
		if (!g.fx.step) {
			g.fx.step = []
		}
		g.fx.step[o] = function(w) {
			if (w.xinit === undefined) {
				if (typeof w.end === "string" && -1 !== w.end.indexOf(";")) {
					var u, t = w.end.split(";");
					if (t.length > 2) {
						for (u in t) {
							if (-1 === t[u].indexOf("native")) {
								t[u] = new n(t[u])
							} else {
								t[u] = m(w.elem, o)
							}
						}
						w.start = null;
						w.end = t
					} else {
						w.start = new n(t[0]);
						w.end = new n(t[1])
					}
				} else {
					w.start = m(w.elem, o);
					w.end = new n(w.end)
				}
				w.xinit = 1
			}
			var v = w.start;
			var z = w.end;
			var y = w.pos;
			if (null === v) {
				var r = y * (z.length - 1), A = y < 1 ? r | 0 : z.length - 2;
				v = z[A];
				z = z[A + 1];
				y = r - A
			}
			if (g.support.opacity) {
				w.elem.style[o] = "rgba(" + ((v.r + (z.r - v.r) * y) | 0) + ","
						+ ((v.g + (z.g - v.g) * y) | 0) + ","
						+ ((v.b + (z.b - v.b) * y) | 0) + ","
						+ ((v.a + (z.a - v.a) * y)) + ")"
			} else {
				w.elem.style[o] = "rgb(" + ((v.r + (z.r - v.r) * y) | 0) + ","
						+ ((v.g + (z.g - v.g) * y) | 0) + ","
						+ ((v.b + (z.b - v.b) * y) | 0) + ")"
			}
		}
	});
	function m(r, o) {
		var q = "";
		if (g.support.opacity) {
			do {
				q = g.curCSS(r, o);
				if ("" != q || g.nodeName(r, "body")) {
					break
				}
			} while (r = r.parentNode);
			if ("" == q) {
				q = "transparent"
			}
		} else {
			do {
				q = g.curCSS(r, o);
				if ("" != q && "transparent" != q && "rgba(0, 0, 0, 0)" != q
						|| g.nodeName(r, "body")) {
					break
				}
			} while (r = r.parentNode);
			if ("" == q) {
				if ("backgroundColor" == o) {
					q = "white"
				} else {
					q = "black"
				}
			}
		}
		return new n(q)
	}
	function l() {
		this.test = function(o) {
			var q = new n(o);
			if (q.success) {
				return q
			}
			return null
		};
		this.red = function(o) {
			var q = new n(o);
			if (q.success) {
				q.g = 255;
				q.b = 255;
				return q
			}
			return null
		};
		this.blue = function(o) {
			var q = new n(o);
			if (q.success) {
				q.r = 255;
				q.g = 255;
				return q
			}
			return null
		};
		this.green = function(o) {
			var q = new n(o);
			if (q.success) {
				q.r = 255;
				q.b = 255;
				return q
			}
			return null
		};
		this.random = function() {
			var o = new n([ c(255 * h()), c(255 * h()), c(255 * h()) ]);
			if (o.success) {
				return o
			}
			return null
		};
		this.complementary = function(o) {
			var q = new n(o);
			if (q.success) {
				q.r ^= 255;
				q.g ^= 255;
				q.b ^= 255;
				return q
			}
			return null
		};
		this.opacity = function(r, v, u) {
			var t = new n(r);
			var q = new n(v);
			if (t.success & q.success) {
				if (u > 1) {
					u /= 100
				}
				u = e(u - 1 + q.a, 0);
				t.r = k((q.r - t.r) * u + t.r);
				t.g = k((q.g - t.g) * u + t.g);
				t.b = k((q.b - t.b) * u + t.b);
				return t
			}
			return null
		};
		this.greyfilter = function(q, t) {
			var o, r = new n(q);
			if (r.success) {
				switch (t) {
				case 1:
					o = 0.35 + 13 * (r.r + r.g + r.b) / 60;
					break;
				case 2:
					o = (13 * (r.r + r.g + r.b) + 5355) / 60;
					break;
				default:
					o = r.r * 0.3 + r.g * 0.59 + r.b * 0.11
				}
				r.r = r.g = r.b = f(c(o), 255);
				return r
			}
			return null
		};
		this.webround = function(o) {
			var q = new n(o);
			if (q.success) {
				if ((q.r += 51 - q.r % 51) > 255) {
					q.r = 255
				}
				if ((q.g += 51 - q.g % 51) > 255) {
					q.g = 255
				}
				if ((q.b += 51 - q.b % 51) > 255) {
					q.b = 255
				}
				return q
			}
			return null
		};
		this.distance = function(q, t) {
			var r = new n(q);
			var o = new n(t);
			if (r.success & o.success) {
				return j(3 * (o.r - r.r) * (o.r - r.r) + 4 * (o.g - r.g)
						* (o.g - r.g) + 2 * (o.b - r.b) * (o.b - r.b))
			}
			return null
		};
		this.readable = function(t, r) {
			var q = new n(r);
			var o = new n(t);
			if (q.success & o.success) {
				return ((o.r - q.r) * (o.r - q.r) + (o.g - q.g) * (o.g - q.g) + (o.b - q.b)
						* (o.b - q.b)) > 10404
			}
			return null
		};
		this.combine = function(q, t) {
			var r = new n(q);
			var o = new n(t);
			if (r.success & o.success) {
				r.r ^= o.r;
				r.g ^= o.g;
				r.b ^= o.b;
				return r
			}
			return null
		};
		this.breed = function(q, v) {
			var t = new n(q);
			var o = new n(v);
			var r = 0;
			if (t.success & o.success) {
				for ( var u = 0; u < 6; u++) {
					if (h() < 0.5) {
						r |= 15 << (u << 2)
					}
				}
				t.r = (t.r & ((r >> 16) & 255))
						| (o.r & (((r >> 16) & 255) ^ 255));
				t.g = (t.g & ((r >> 8) & 255))
						| (o.g & (((r >> 8) & 255) ^ 255));
				t.b = (t.b & ((r >> 0) & 255))
						| (o.b & (((r >> 0) & 255) ^ 255));
				return t
			}
			return null
		};
		this.additive = function(q, t) {
			var r = new n(q);
			var o = new n(t);
			if (r.success & o.success) {
				if ((r.r += o.r) > 255) {
					r.r = 255
				}
				if ((r.g += o.g) > 255) {
					r.g = 255
				}
				if ((r.b += o.b) > 255) {
					r.b = 255
				}
				return r
			}
			return null
		};
		this.subtractive = function(q, t) {
			var r = new n(q);
			var o = new n(t);
			if (r.success & o.success) {
				if ((r.r += o.r - 255) < 0) {
					r.r = 0
				}
				if ((r.g += o.g - 255) < 0) {
					r.g = 0
				}
				if ((r.b += o.b - 255) < 0) {
					r.b = 0
				}
				return r
			}
			return null
		};
		this.subtract = function(q, t) {
			var r = new n(q);
			var o = new n(t);
			if (r.success & o.success) {
				if ((r.r -= o.r) < 0) {
					r.r = 0
				}
				if ((r.g -= o.g) < 0) {
					r.g = 0
				}
				if ((r.b -= o.b) < 0) {
					r.b = 0
				}
				return r
			}
			return null
		};
		this.multiply = function(q, t) {
			var r = new n(q);
			var o = new n(t);
			if (r.success & o.success) {
				r.r = c(r.r / 255 * o.r);
				r.g = c(r.g / 255 * o.g);
				r.b = c(r.b / 255 * o.b);
				return r
			}
			return null
		};
		this.average = function(q, t) {
			var r = new n(q);
			var o = new n(t);
			if (r.success & o.success) {
				r.r = (r.r + o.r) >> 1;
				r.g = (r.g + o.g) >> 1;
				r.b = (r.b + o.b) >> 1;
				return r
			}
			return null
		};
		this.triad = function(o) {
			var q = new n(o);
			if (q.success) {
				return [ q, new n([ q.b, q.r, q.g ]), new n([ q.g, q.b, q.r ]) ]
			}
			return null
		};
		this.tetrad = function(o) {
			var q = new n(o);
			if (q.success) {
				return [ q, new n([ q.b, q.r, q.b ]), new n([ q.b, q.g, q.r ]),
						new n([ q.r, q.b, q.r ]) ]
			}
			return null
		};
		this.gradientlevel = function(q, v, u, t) {
			if (u > t) {
				return null
			}
			var r = new n(q);
			var o = new n(v);
			if (r.success & o.success) {
				r.r = c(r.r + ((o.r - r.r) / t) * u);
				r.g = c(r.g + ((o.g - r.g) / t) * u);
				r.b = c(r.b + ((o.b - r.b) / t) * u);
				return r
			}
			return null
		};
		this.gradientarray = function(r, u, v) {
			if (u > v) {
				return null
			}
			var w = c(u * (r.length - 1) / v);
			var q = (u - v * w / (r.length - 1)) / v;
			var t = new n(r[w]);
			var o = new n(r[w + 1]);
			if (t.success & o.success) {
				t.r = c(t.r + r.length * (o.r - t.r) * q);
				t.g = c(t.g + r.length * (o.g - t.g) * q);
				t.b = c(t.b + r.length * (o.b - t.b) * q);
				return t
			}
			return null
		}, this.nearestname = function(o) {
			o = new n(o);
			if (o.success) {
				return o.getName()
			}
			return null
		};
		this.darken = function(q, r, o) {
			if (r === undefined) {
				r = 1
			} else {
				if (r < 0) {
					return this.lighten(q, -r, o)
				}
			}
			if (o === undefined) {
				o = 32
			}
			var t = new n(q);
			if (t.success) {
				if ((t.r -= o * r) < 0) {
					t.r = 0
				}
				if ((t.g -= o * r) < 0) {
					t.g = 0
				}
				if ((t.b -= o * r) < 0) {
					t.b = 0
				}
				return t
			}
			return null
		};
		this.lighten = function(q, r, o) {
			if (r === undefined) {
				r = 1
			} else {
				if (r < 0) {
					return this.darken(q, -r, o)
				}
			}
			if (o === undefined) {
				o = 32
			}
			var t = new n(q);
			if (t.success) {
				if ((t.r += o * r) > 255) {
					t.r = 255
				}
				if ((t.g += o * r) > 255) {
					t.g = 255
				}
				if ((t.b += o * r) > 255) {
					t.b = 255
				}
				return t
			}
			return null
		};
		this.analogous = function(t, u, v) {
			if (u === undefined) {
				u = 8
			}
			if (v === undefined) {
				v = 30
			}
			var w = new n(t);
			if (w.success) {
				var r = w.getHSV();
				var q = 360 / v, o = [ w ];
				for (r.h = ((r.h - (q * u >> 1)) + 720) % 360; --u;) {
					r.h += q;
					r.h %= 360;
					o.push(new n(r))
				}
				return o
			}
			return null
		};
		this.splitcomplements = function(r) {
			var t = new n(r);
			if (t.success) {
				var q = t.getHSV();
				var o = [ t ];
				q.h += 72;
				q.h %= 360;
				o.push(new n(q));
				q.h += 144;
				q.h %= 360;
				o.push(new n(q));
				return o
			}
			return null
		};
		this.monochromatic = function(r, t) {
			if (t === undefined) {
				t = 6
			}
			var u = new n(r);
			if (u.success) {
				var q = u.getHSV();
				var o = [ u ];
				while (--t) {
					q.v += 20;
					q.v %= 100;
					o.push(new n(q))
				}
				return o
			}
			return null
		}
	}
	g.xcolor = new l();
	g.fn.isReadable = function() {
		var q = this[0];
		var r = "";
		var o = "";
		do {
			if ("" == r
					&& ("transparent" == (r = g.curCSS(q, "color")) || "rgba(0, 0, 0, 0)" == r)) {
				r = ""
			}
			if ("" == o
					&& ("transparent" == (o = g.curCSS(q, "backgroundColor")) || "rgba(0, 0, 0, 0)" == o)) {
				o = ""
			}
			if ("" != r && "" != o || g.nodeName(q, "body")) {
				break
			}
		} while (q = q.parentNode);
		if ("" == r) {
			r = "black"
		}
		if ("" == o) {
			o = "white"
		}
		return g.xcolor.readable(o, r)
	}
})(jQuery);
var JSON = JSON || {};
JSON.stringify = JSON.stringify || function(g) {
	var f = typeof (g);
	if (f != "object" || g === null) {
		if (f == "string") {
			g = '"' + g + '"'
		}
		return String(g)
	} else {
		var h, d, e = [], c = (g && g.constructor == Array);
		for (h in g) {
			d = g[h];
			f = typeof (d);
			if (f == "string") {
				d = '"' + d + '"'
			} else {
				if (f == "object" && d !== null) {
					d = JSON.stringify(d)
				}
			}
			e.push((c ? "" : '"' + h + '":') + String(d))
		}
		return (c ? "[" : "{") + String(e) + (c ? "]" : "}")
	}
};
JSON.parse = JSON.parse || function(str) {
	if (str === "") {
		str = '""'
	}
	eval("var p=" + str + ";");
	return p
};
if ($.cookie("b")) {
	var b_cookie = JSON.parse($.cookie("b")) || {}
} else {
	var b_cookie = {}
}
booking[sNSStartupLoad].show_language = {
	priority : 9,
	init : function() {
		if (typeof (b_cookie) == "undefined") {
			b_cookie = {}
		}
		$("#langselectbutton, #languageselect input").hide();
		$("#langselectformlist, #currList").change(function() {
			$("#languageselect")[0].submit();
			b_cookie.langPrompt = "dontshow";
			if (typeof (JSON) != "undefined") {
				$.cookie("b", JSON.stringify(b_cookie), {
					expires : 30,
					path : "/",
					domain : booking.env.b_domain_end
				})
			}
		});
		if (booking.env.show_language_suggestion) {
			if (b_cookie.countLang) {
				if (!isNaN(b_cookie.countLang)) {
					var c = parseInt(parseInt(b_cookie.countLang) + 1);
					if (c <= 4) {
						booking.env.language_dialog_count2 = c;
						b_cookie.countLang = booking.env.language_dialog_count2
					}
				} else {
					booking.env.language_dialog_count2 = 1;
					b_cookie.countLang = 1
				}
			} else {
				booking.env.language_dialog_count2 = 1;
				b_cookie.countLang = 1
			}
			if (typeof (JSON) != "undefined") {
				$.cookie("b", JSON.stringify(b_cookie), {
					expires : 30,
					path : "/",
					domain : booking.env.b_domain_end
				})
			}
			if (b_cookie.langPrompt != "dontshow"
					&& booking.env.language_dialog_count2 < 4) {
				setTimeout(booking[sNSStartupLoad].show_language.createAlert,
						2000)
			}
		}
	},
	createAlert : function(f) {
		var g = booking.env.show_language_suggestion, k = booking.env.browser_lang, d = booking.env.icons, h, l = false, e = "", c = "", j = "";
		if (g) {
			if ($("#languageselect .language-wrapper").length) {
				h = $("#languageselect .language-wrapper");
				e = "margin-top:10px;";
				c = "top: -2px;";
				if (booking.env.b_is_ie6 || booking.env.b_is_ie7) {
					j = "margin-top:25px;left:100px;"
				}
				l = true
			} else {
				h = $("#personal_form");
				c = "top: -11px;";
				j = "top:40px;left:90px;"
			}
			h
					.append('<div id="lang-prompt" style="display:none;height:1px;position:absolute;z-index:50;width:230px;'
							+ j
							+ '"><div style="position:absolute;zoom:1;'
							+ c
							+ ";left:110px;width:17px;height:13px;background:url('//s.bstatic.com/static/img/experiments/top-info-arrrow2.png');\"></div><div style=\"border:2px solid #a2bbda;padding:10px;background:#e6edf6;width:230px;-moz-box-shadow:0 1px 2px rgba(0,0,0,.7);-webkit-box-shadow:0 1px 2px rgba(0,0,0,.7);"
							+ e
							+ '"><a href="#" class="close" style="float:right;font-weight:normal;">'
							+ booking.env.transl_close_x
							+ '</a><a href="#scs" id="lang_change_link" style="display:block;font-weight:normal;margin-right:50px;padding-left:40px;white-space:normal;background:url(\'//q.bstatic.com/static/img/flags/24/'
							+ booking.env.b_flag_to_suggest
							+ ".png') no-repeat;\">"
							+ g.transl_change_page_lang_to_x
							+ "</a></div></div>");
			$("#lang-prompt").fadeIn("slow");
			$("#lang-prompt .close").click(function() {
				b_cookie.langPrompt = "dontshow";
				if (typeof (JSON) != "undefined") {
					$.cookie("b", JSON.stringify(b_cookie), {
						expires : 30,
						path : "/",
						domain : booking.env.b_domain_end
					})
				}
				$("#lang-prompt").hide();
				return false
			});
			$("#lang-prompt #lang_change_link").click(
					function() {
						b_cookie.langPrompt = "dontshow";
						if (typeof (JSON) != "undefined") {
							$.cookie("b", JSON.stringify(b_cookie), {
								expires : 30,
								path : "/",
								domain : booking.env.b_domain_end
							})
						}
						if (l) {
							$("#langselectformlist").val(
									g.suggested_lang_select);
							$("#languageselect")[0].submit()
						} else {
							window.location = $(
									"#user_menu_lang_"
											+ g.suggested_lang_select).attr(
									"href")
						}
					})
		}
	}
};
booking[sNSStartupLoad].message_box = {
	priority : 9,
	init : function() {
		$("#self_change1 .messageBox").click(function(d) {
			var c = $(this).children("a").attr("href");
			if (c && c != "#") {
				location.href = $(this).children("a").attr("href")
			}
			return false
		});
		$("#isDifferent").fadeIn()
	}
};
booking.newsLanding = (function() {
	var c = $("#b_hotel_list");
	var k = $("#grid_toggle");
	var j = function() {
		if (typeof b_cookie === "undefined") {
			window.b_cookie = {}
		}
		k.click(function() {
			h()
		});
		$(".hotel_item").hover(function() {
			$(this).toggleClass("hotel_item_hover")
		});
		$(".hotel_item").click(function(l) {
			if (l.which == 2) {
				return true
			}
			location.href = $(this).find("a.bigbluebutton").attr("href");
			return false
		});
		$(".fd_show_all").click(
				function() {
					var l = $(this).parent(".b_list", "#b_asides");
					l.toggleClass("collapsed", 500);
					booking.google.trackEvent(booking.google.clickTracker,
							"Fd_pages lists - Show All", (l
									.hasClass("b_region_list") ? "Regions"
									: "Countries"));
					return false
				});
		$(".b_list a")
				.click(
						function() {
							var l = $(this).parents(".b_list");
							if ($(this).find(".b_item_selected").length > 0) {
								booking.google
										.trackEvent(
												booking.google.clickTracker,
												"Fd_pages ufi list",
												(l.hasClass("b_region_list") ? booking.env.b_lang
														+ " | Regions Remove | "
														+ booking.env.b_countrycode
														+ " | "
														: booking.env.b_lang
																+ " | Countries Remove | ")
														+ $(this).find(
																".b_name")
																.text())
							} else {
								booking.google
										.trackEvent(
												booking.google.clickTracker,
												"Fd_pages ufi list",
												(l.hasClass("b_region_list") ? booking.env.b_lang
														+ " | Regions | "
														+ booking.env.b_countrycode
														+ " | "
														: booking.env.b_lang
																+ " | Countries | ")
														+ $(this).find(
																".b_name")
																.text())
							}
						});
		if ($.browser.msie && jQuery.browser.version < 9) {
			$(window).resize(function() {
				d()
			});
			d()
		}
		$("#grid_toggle").show();
		g()
	};
	var h = function() {
		var m, n, l;
		if (c.hasClass("b_hotel_list_wide")) {
			c.removeClass("b_hotel_list_wide");
			c.addClass("b_hotel_list_compact");
			b_cookie.results_view = "compact";
			l = "compact"
		} else {
			c.removeClass("b_hotel_list_compact");
			c.addClass("b_hotel_list_wide");
			b_cookie.results_view = "wide";
			l = "wide"
		}
		f();
		$("#b_results_nav a").each(function(o) {
			m = $(this).attr("href");
			n = e(m, "view_mode", l);
			$(this).attr("href", n)
		});
		if (k.hasClass("details_view")) {
			k.removeClass("details_view");
			k.addClass("compact_view")
		} else {
			k.removeClass("compact_view");
			k.addClass("details_view")
		}
	};
	var g = function() {
		if (b_cookie.results_view == "wide") {
			c.removeClass("b_hotel_list_compact");
			c.addClass("b_hotel_list_wide");
			b_cookie.results_view = "wide";
			f()
		}
	};
	var f = function() {
		if (typeof JSON === "undefined") {
			return
		}
		$.cookie("b", JSON.stringify(b_cookie), {
			expires : 30,
			path : "/",
			domain : booking.env.b_domain_end
		})
	};
	function e(n, m, q) {
		var t = booking.env.b_canonical_url_delimiter, o = n.split(t), l = o.length, r;
		while (l--) {
			r = o[l].split("=");
			if (r[0] == m) {
				r[1] = q;
				o[l] = r.join("=");
				break
			}
		}
		if (l < 0) {
			o[o.length] = [ m, q ].join("=")
		}
		return o.join(t)
	}
	var d = function() {
		var l = $(window).width();
		var m = $("body.nobg #bodyconstraint");
		if (l < 901) {
			m.css("width", "692px")
		} else {
			if (l < 1110) {
				m.css("width", "901px")
			} else {
				m.css("width", "1110px")
			}
		}
	};
	return {
		init : j
	}
}());
booking[sNSExperiments].fd_pages = {
	priority : 1,
	init : function() {
		booking.newsLanding.init()
	}
};
booking[sNSStartup].dod_sr = {
	priority : 1,
	init : function() {
		$(".hotel_item").click(function(c) {
			if (c.which == 2) {
				return true
			}
			location.href = $(this).find("a.bigbluebutton").attr("href");
			return false
		})
	}
};
booking[sNSStartup].profile = {
	priority : 9,
	init : function() {
		if ($("a#remove_email_link").length) {
			$("a#remove_email_link").click(function() {
				$("div#alternate_second").hide();
				$("div#add_email").show();
				return false
			});
			$("div#add_email").click(function() {
				$("div#alternate_second").show();
				$("div#add_email").hide();
				return false
			})
		}
		$("button#edit_profiledata")
				.click(
						function() {
							$("div.view-hide").css("display", "none");
							$("div.edit-hide").css("display", "block");
							if (!booking.env.has_avatar_uploaded) {
								booking.env
										.trackExperiment(booking.env.js_experiment_tracking.upload_avatar)
							}
							$("body").scrollTo({
								top : 150,
								left : 0
							}, 300, function() {
								if ($("#firstname").length) {
									$("#firstname").focus()
								}
							})
						});
		$("ul.newsletter_emaildisplay input:checkbox").click(function() {
			if ($(this).is(":checked")) {
				$(this).parent().next().removeClass("hide_email");
				$(this).parent().next().next().removeClass("hide_email")
			} else {
				$(this).parent().next().addClass("hide_email");
				$(this).parent().next().next().addClass("hide_email")
			}
		});
		$("a#cancel_information").click(function() {
			$("div.edit-hide").css("display", "none");
			$("div.view-hide").css("display", "block");
			if ($("#contact_cs_form").length) {
				document.getElementById("contact_cs_form").reset()
			}
			if ($("#userdataform").length) {
				document.getElementById("userdataform").reset()
			}
			return false
		})
	}
};
booking[sNSStartup].rate_guarantee = {
	priority : 9,
	init : function() {
		$(
				"#rate_guarantee a, a.usps_rate_guarantee_link, #rate_guaranteev2 a, #ratelogo a, #terms_rateguarantee, a#guarantee_terms, #rates_feedback_invite a.jq_tooltip")
				.click(
						function() {
							window
									.open(this.href, "RateGuarantee",
											"status=1,toolbar=0,menubar=0,width=450,height=550,scrollbars=1");
							return false
						});
		return true
	}
};
booking.ensureNamespaceExists(sNSStartup);
booking[sNSStartup].short_url = {
	priority : 9,
	loadpos : 0,
	savecheck : 0,
	init : function() {
		var create_twitter_short_url = function(oTarget) {
			if (typeof oTarget == "object") {
				myPopup = window.open("", "booking_com");
				$.get("/short_uri?url="
						+ escape(oTarget.getAttribute("data-shorturl"))
						+ "&aid=" + booking.env.aid, function(responseText) {
					var json = eval(responseText);
					myPopup.location.href = oTarget.getAttribute("href")
							+ " http://www.booking.com/" + json.short_url
				})
			}
		};
		$(".review_useful_t").live("click", function() {
			create_twitter_short_url(this);
			return false
		});
		$(".share_t").click(function() {
			create_twitter_short_url(this);
			return false
		})
	}
};
booking.env.showCase = function(d) {
	var f = {
		baseEl : "#newsletter_deals_city",
		showCaseClass : ".deals",
		navClass : ".deals_nav",
		menuClass : ".deals_menu",
		showCaseWidth : 150,
		showCaseBorder : 3,
		defSteps : 3
	};
	$("ul.deals", d.baseEl).css("left", "0");
	var d = $.extend(f, d);
	c();
	$(d.baseEl).slideToggle();
	function c() {
		$(".next", d.baseEl).click(function() {
			e(1)
		});
		$(".prev", d.baseEl).click(function() {
			e(-1)
		})
	}
	function e(h) {
		$(".next", d.baseEl).unbind("click");
		$(".prev", d.baseEl).unbind("click");
		var m = d.baseEl, g = d.defSteps, o = parseInt(d.showCaseWidth)
				+ parseInt(d.showCaseBorder);
		var n = parseInt(g) * parseInt(o) * parseInt(h), l = $("ul"
				+ d.showCaseClass + ":visible", m), k = l.css("width"), j = parseInt(k)
				/ n;
		if (n > 0) {
			if ((-1 * parseInt(l.css("left"))) + n < parseInt(k)) {
				l.animate({
					left : "-=" + n
				}, "normal", c)
			} else {
				l.animate({
					left : "0"
				}, "normal", c)
			}
		} else {
			if (parseInt(l.css("left")) != 0) {
				l.animate({
					left : "-=" + n
				}, "normal", c)
			} else {
				c()
			}
		}
	}
};
booking.ensureNamespaceExists(sNSExperiments);
booking[sNSStartup].b_site_experiment_expand_signup = {
	priority : 9,
	init : function() {
		var c = $("#newsletter_to", ".footerForm").attr("value");
		$("#newsletter_to", ".footerForm").click(function() {
			var d = $(this);
			if (d.val() == c) {
				d.val("")
			} else {
				if (d.val() != c) {
					d.select()
				}
			}
		});
		$("#newsletter_to", ".footerForm").blur(function() {
			var d = $(this);
			if (d.val() == "") {
				d.val(c)
			}
		});
		$("#newsletter_button_footer").click(function() {
			$(this).parents("form:first").submit()
		});
		$(".signupForm")
				.submit(
						function(e) {
							e.preventDefault();
							$(".newsletter_ajax_error").hide();
							var h = $(this);
							var o = false;
							var l = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
							var f = $("input[name=url]", $(this)).val();
							var m = $("input[name=hostname]", $(this)).val();
							var g = $("input[name=aid]", $(this)).val();
							var k = $("input[name=companyname]", $(this)).val();
							var d = $("input[name=subscribe_source]", $(this))
									.val();
							var n = $("input[name=to]", $(this)).val();
							if (n == "" || (!l.test(n))) {
								o = true
							}
							if (o == true) {
								$(".newsletter_subscribe_error_invalid", h)
										.show();
								return false
							}
							var j = "to=" + n + "&url=" + f + "&hostname=" + m
									+ "&aid=" + g + "&companyname=" + k
									+ "&subscribe_source=" + d;
							$
									.ajax({
										type : "POST",
										url : "http://"
												+ booking.env.b_hostname_signup
												+ "/newslettersubscribe.json",
										data : j,
										dataType : "json",
										success : function(q) {
											if (q.success == 0) {
												if (q.error == "denied") {
													$(
															".newsletter_subscribe_error_denied",
															h).show();
													$(
															".newsletter_subscribe_error_bad_unknown",
															h).hide();
													$(
															".newsletter_subscribe_error_invalid",
															h).hide();
													$(
															".newsletter_sub_success",
															h).hide()
												} else {
													if (q.error == "bad_params") {
														$(
																".newsletter_subscribe_error_bad_unknown",
																h).show();
														$(
																".newsletter_subscribe_error_denied",
																h).hide();
														$(
																".newsletter_subscribe_error_invalid",
																h).hide();
														$(
																".newsletter_sub_success",
																h).hide()
													}
												}
												return
											} else {
												if (q.success == 1) {
													if ($("div#flashdealsbg_wrapper").length) {
														window.location.href = booking.env.b_nonsecure_hostname_signup
																+ booking.env.b_fd_searchresults_url_signup
													} else {
														$(
																".newsletter_form_fields",
																h).hide();
														$(
																".newsletter_sub_success",
																h).show();
														$(
																".newsletter_subscribe_error_bad_unknown",
																h).hide();
														$(
																".newsletter_subscribe_error_denied",
																h).hide();
														$(
																".newsletter_subscribe_error_invalid",
																h).hide()
													}
												}
											}
										}
									})
						})
	}
};
function mySlideToggle(f, d) {
	var e = $(f), c = e.data("originalHeight"), g = e.is(":visible");
	if (arguments.length == 1) {
		d = !g
	}
	if (d == g) {
		return false
	}
	if (!c) {
		c = e.show().height();
		e.data("originalHeight", c);
		if (!g) {
			e.hide().css({
				height : 0
			})
		}
	}
	if (d) {
		e.show().animate({
			height : c
		}, {
			duration : 250
		})
	} else {
		e.animate({
			height : 0
		}, {
			duration : 250,
			complete : function() {
				e.hide()
			}
		})
	}
}
booking[sNSStartup].social_network = {
	priority : 9,
	init : function() {
		$("#social_network_bookmarks li a").mouseover(function() {
			$("#share_on").text(this.name)
		});
		$(".socnet_mailafriend")
				.click(
						function() {
							var e, c, h, d, g, f;
							if (booking.env.b_is_ie6) {
								g = 'style="height: 453px;"';
								f = 'style="height: 435px;width: 618px;"'
							} else {
								g = "";
								f = ""
							}
									e = "maf_wrapper",
									c = '<div id="maf_wrapper" class="iframe"><div id="maf_shadow" '
											+ g
											+ '></div><div id="maf_iframe_wrapper"><iframe id="maf_iframe" '
											+ f
											+ ' src="'
											+ this.href
											+ '" frameborder="0"></iframe></div></div>';
							if ($("#" + e).length) {
								$("#" + e).show()
							} else {
								$(document.body).append(c)
							}
							h = $(window)[0];
							d = (document.body.scrollTop == 0) ? (h.pageYOffset) ? h.pageYOffset
									: (document.body.parentElement) ? document.body.parentElement.scrollTop
											: 0
									: document.body.scrollTop;
							$("#" + e).css(
									"top",
									d
											+ ($(h).height() / 2 - $("#" + e)
													.height() / 2));
							if (booking.env.b_site_experiment_event_tracking
									&& typeof (pageTracker) != "undefined") {
								booking.google.trackEvent(
										booking.google.clickTracker,
										"Mail A Friend",
										"Popup mail_a_friend_redesign")
							}
							return false
						})
	}
};
booking.env.Tabs = function(c) {
	var d = {
		baseEl : "#newsletter_deals_city",
		menuEl : ".deals_menu",
		contentEl : ".deals_wrapper",
		dealsEl : ".deals",
		navEl : ".nav_menu",
		defaultEl : 1
	};
	var c = $.extend(d, c);
	$(c.menuEl + " li:nth-child(" + c.defaultEl + ")").addClass("active")
			.show();
	$(c.contentEl + " ul.deals:nth-child(" + c.defaultEl + ")").show();
	$("li", c.menuEl).click(function() {
		$("li", c.menuEl).removeClass("active");
		$(this).addClass("active");
		$(c.dealsEl, c.contentEl).hide();
		var e = $(this).find("a").attr("href");
		$(e).show();
		return false
	});
	$(c.contentEl, c.baseEl).show()
};
if (typeof booking.tools === "undefined") {
	booking.tools = {};
	booking.tools.array2Object = function(f) {
		var c, d, e = {};
		for (c = 0, d = f.length; c < d; c += 1) {
			e[f[c]] = true
		}
		return e
	}
}
(function(d) {
	d.dimensions = {
		version : "1.2"
	};
	d
			.each(
					[ "Height", "Width" ],
					function(f, e) {
						d.fn["inner" + e] = function() {
							if (!this[0]) {
								return
							}
							var h = e == "Height" ? "Top" : "Left", g = e == "Height" ? "Bottom"
									: "Right";
							return this.is(":visible") ? this[0]["client" + e]
									: c(this, e.toLowerCase())
											+ c(this, "padding" + h)
											+ c(this, "padding" + g)
						};
						d.fn["outer" + e] = function(h) {
							if (!this[0]) {
								return
							}
							var k = e == "Height" ? "Top" : "Left", g = e == "Height" ? "Bottom"
									: "Right";
							h = d.extend({
								margin : false
							}, h || {});
							var j = this.is(":visible") ? this[0]["offset" + e]
									: c(this, e.toLowerCase())
											+ c(this, "border" + k + "Width")
											+ c(this, "border" + g + "Width")
											+ c(this, "padding" + k)
											+ c(this, "padding" + g);
							return j
									+ (h.margin ? (c(this, "margin" + k) + c(
											this, "margin" + g)) : 0)
						}
					});
	d
			.each(
					[ "Left", "Top" ],
					function(f, e) {
						d.fn["scroll" + e] = function(g) {
							if (!this[0]) {
								return
							}
							return g != undefined ? this
									.each(function() {
										this == window || this == document ? window
												.scrollTo(
														e == "Left" ? g
																: d(window)["scrollLeft"]
																		(),
														e == "Top" ? g
																: d(window)["scrollTop"]
																		())
												: this["scroll" + e] = g
									})
									: this[0] == window || this[0] == document ? self[(e == "Left" ? "pageXOffset"
											: "pageYOffset")]
											|| d.boxModel
											&& document.documentElement["scroll"
													+ e]
											|| document.body["scroll" + e]
											: this[0]["scroll" + e]
						}
					});
	d.fn
			.extend({
				position : function() {
					var k = 0, j = 0, h = this[0], l, e, g, f;
					if (h) {
						g = this.offsetParent();
						l = this.offset();
						e = g.offset();
						l.top -= c(h, "marginTop");
						l.left -= c(h, "marginLeft");
						e.top += c(g, "borderTopWidth");
						e.left += c(g, "borderLeftWidth");
						f = {
							top : l.top - e.top,
							left : l.left - e.left
						}
					}
					return f
				},
				offsetParent : function() {
					var e = this[0].offsetParent;
					while (e
							&& (!/^body|html$/i.test(e.tagName) && d.css(e,
									"position") == "static")) {
						e = e.offsetParent
					}
					return d(e)
				}
			});
	function c(e, f) {
		return parseInt(d.curCSS(e.jquery ? e[0] : e, f, true)) || 0
	}
})(jQuery);
(function(c) {
	c.fn.bgIframe = c.fn.bgiframe = function(e) {
		if (c("html.b_msie_6").length) {
			e = c.extend({
				top : "auto",
				left : "auto",
				width : "auto",
				height : "auto",
				opacity : true,
				src : "javascript:false;"
			}, e || {});
			var f = function(g) {
				return g && g.constructor == Number ? g + "px" : g
			}, d = '<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'
					+ e.src
					+ '"style="display:block;position:absolute;z-index:-1;'
					+ (e.opacity !== false ? "filter:Alpha(Opacity='0');" : "")
					+ "top:"
					+ (e.top == "auto" ? "expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px')"
							: f(e.top))
					+ ";left:"
					+ (e.left == "auto" ? "expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px')"
							: f(e.left))
					+ ";width:"
					+ (e.width == "auto" ? "expression(this.parentNode.offsetWidth+'px')"
							: f(e.width))
					+ ";height:"
					+ (e.height == "auto" ? "expression(this.parentNode.offsetHeight+'px')"
							: f(e.height)) + ';"/>';
			return this.each(function() {
				if (c("> iframe.bgiframe", this).length == 0) {
					this.insertBefore(document.createElement(d),
							this.firstChild)
				}
			})
		}
		return this
	}
})(jQuery);
(function(h) {
	var d = {}, o, t, v, n = h.browser.msie
			&& /MSIE\s(5\.5|6\.)/.test(navigator.userAgent), c = false;
	h.tooltip = {
		blocked : false,
		defaults : {
			delay : 200,
			fade : false,
			showURL : true,
			extraClass : "",
			top : 15,
			left : 15,
			id : "tooltip"
		},
		block : function() {
			h.tooltip.blocked = !h.tooltip.blocked
		}
	};
	h.fn
			.extend({
				tooltip : function(w) {
					w = h.extend({}, h.tooltip.defaults, w);
					l(w);
					if (typeof booking.env.b_site_experiment_ipad_improvements != "undefined"
							&& booking.env.b_site_experiment_ipad_improvements) {
						return this.each(
								function() {
									h.data(this, "tooltip", w);
									this.tOpacity = d.parent.css("opacity");
									this.tooltipText = this
											.getAttribute("data-title")
											|| this.title;
									this.removeAttribute("title");
									this.alt = ""
								}).mouseover(q).bind("touchstart", function() {
							h(this).mouseover()
						}).mouseout(j).bind("touchend", function() {
							h(this).mouseout()
						}).click(j)
					} else {
						if (booking.env.touch_os) {
							return this
									.each(
											function() {
												h.data(this, "tooltip", w);
												this.tOpacity = d.parent
														.css("opacity");
												this.tooltipText = this
														.getAttribute("data-title")
														|| this.title;
												this.removeAttribute("title");
												this.alt = ""
											}).click(q)
						} else {
							if (booking.env.b_site_experiment_dont_hide_tooltips_onclick
									&& !h(this).hasClass("remover")) {
								return this.each(
										function() {
											h.data(this, "tooltip", w);
											this.tOpacity = d.parent
													.css("opacity");
											this.tooltipText = this
													.getAttribute("data-title")
													|| this.title;
											this.removeAttribute("title");
											this.alt = ""
										}).mouseover(q).mouseout(j)
							} else {
								return this.each(
										function() {
											h.data(this, "tooltip", w);
											this.tOpacity = d.parent
													.css("opacity");
											this.tooltipText = this
													.getAttribute("data-title")
													|| this.title;
											this.removeAttribute("title");
											this.alt = ""
										}).mouseover(q).mouseout(j).click(j)
							}
						}
					}
				},
				fixPNG : n ? function() {
					return this
							.each(function() {
								var w = h(this).css("backgroundImage");
								if (w.match(/^url\(["']?(.*\.png)["']?\)$/i)) {
									w = RegExp.$1;
									h(this)
											.css(
													{
														backgroundImage : "none",
														filter : "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='"
																+ w + "')"
													})
											.each(
													function() {
														var x = h(this).css(
																"position");
														if (x != "absolute"
																&& x != "relative") {
															h(this).css(
																	"position",
																	"relative")
														}
													})
								}
							})
				}
						: function() {
							return this
						},
				unfixPNG : n ? function() {
					return this.each(function() {
						h(this).css({
							filter : "",
							backgroundImage : ""
						})
					})
				} : function() {
					return this
				},
				hideWhenEmpty : function() {
					return this.each(function() {
						h(this)[h(this).html() ? "show" : "hide"]()
					})
				},
				url : function() {
					return this.attr("href") || this.attr("src")
				}
			});
	function l(w) {
		if (d.parent) {
			return
		}
		d.parent = h(
				'<div id="' + w.id + '" style="width: ' + w.width
						+ 'px;"><div class="shadow"><h3></h3></div></div>')
				.appendTo(document.body).hide();
		if (booking.env.touch_os) {
			d.parent.bind("click", function() {
				if (h.tooltip.blocked) {
					return
				}
				if (v) {
					clearTimeout(v)
				}
				o = null;
				h(this).removeClass(w.extraClass).fadeOut().css("opacity", "")
			})
		}
		if (h.fn.bgiframe) {
			d.parent.bgiframe()
		}
		d.title = h("h3", d.parent);
		d.body = h("div.body", d.parent);
		d.url = h("div.url", d.parent)
	}
	function f(w) {
		return h.data(w, "tooltip")
	}
	function k(w) {
		if (f(this).delay) {
			v = setTimeout(u, f(this).delay)
		} else {
			u()
		}
		c = !!f(this).track;
		h(document.body).bind("mousemove.tooltip", g);
		g(w)
	}
	var r = false;
	function q() {
		if (h.tooltip.blocked || this == o
				|| (!this.tooltipText && !f(this).bodyHandler)) {
			return
		}
		o = this;
		t = this.tooltipText;
		if (h(this).hasClass("hotel_thumbs_sprite")
				|| h(this).hasClass("hotel_variable_size")) {
			r = true;
			var C = h(window);
			var z = C.width();
			var B = C.height();
			var y = 200;
			if (z > 1600 && B > 900) {
				y = 600
			} else {
				if (z > 1360 && B > 765) {
					y = 500
				} else {
					if (z > 1120 && B > 630) {
						y = 400
					} else {
						if (z > 880 && B > 495) {
							y = 300
						} else {
							if (z > 760 && B > 428) {
								y = 250
							}
						}
					}
				}
			}
			t = t.replace(/\/max(\d+)\//, "/max" + y + "/")
		}
		if (f(this).bodyHandler) {
			d.title.hide();
			var D = f(this).bodyHandler.call(this);
			if (D.nodeType || D.jquery) {
				d.title.empty().append(D)
			} else {
				d.title.html(D)
			}
			d.title.show()
		} else {
			if (f(this).showBody) {
				var A = t.split(f(this).showBody);
				d.title.html(A.shift()).show();
				d.body.empty();
				for ( var x = 0, w; (w = A[x]); x++) {
					if (x > 0) {
						d.body.append("<br/>")
					}
					d.body.append(w)
				}
				d.body.hideWhenEmpty()
			} else {
				d.title.html(t).show();
				d.body.hide()
			}
		}
		if (f(this).showURL && h(this).url()) {
			d.url.html(h(this).url().replace("http://", "")).show()
		} else {
			d.url.hide()
		}
		d.parent.addClass(f(this).extraClass);
		if (f(this).fixPNG) {
			d.parent.fixPNG()
		}
		k.apply(this, arguments);
		if (booking.env.touch_os) {
			h("#tooltip h3")
					.append(
							"<img src='//r.bstatic.com/static/img/experiments/filter_remove.gif' alt='Close window' style='position: absolute; right: 8px; top: 8px;' />")
					.css("padding-right", "22px")
		}
	}
	function u() {
		v = null;
		if (!o || !f(o)) {
			return
		}
		if ((!n || !h.fn.bgiframe) && f(o).fade) {
			if (d.parent.is(":animated")) {
				d.parent.stop().show().fadeTo(f(o).fade, o.tOpacity)
			} else {
				d.parent.is(":visible") ? d.parent
						.fadeTo(f(o).fade, o.tOpacity) : d.parent
						.fadeIn(f(o).fade)
			}
		} else {
			d.parent.show()
		}
		if (booking.env.b_site_experiment_nice_tooltips == 1) {
			h("#tooltip").removeClass("niceBlackBorderTooltip")
		} else {
			h("#tooltip").removeClass("blackBorderTooltip")
		}
		if (f(o).width) {
			d.parent.css({
				width : f(o).width + "px"
			})
		} else {
			d.parent.css({
				width : ""
			});
			if (h("#tooltip img").size()) {
				if (booking.env.b_site_experiment_nice_tooltips == 1) {
					h("#tooltip").addClass("niceBlackBorderTooltip")
				} else {
					h("#tooltip").addClass("blackBorderTooltip")
				}
				var w = (h("#tooltip img").width()), x = (h("#tooltip").width());
				if (w < x) {
					if (w != 0) {
						h("#tooltip").css("width", w + 20)
					} else {
						h("#tooltip img").bind("load", function() {
							w = (h("#tooltip img").width());
							if (w == 0) {
								return
							}
							h("#tooltip").css("width", w + 20)
						})
					}
				}
			}
		}
		g()
	}
	function g(z) {
		if (h.tooltip.blocked) {
			return
		}
		if (z && z.target && z.target.tagName == "OPTION") {
			return
		}
		if (!c && d.parent.is(":visible")) {
			h(document.body).unbind("mousemove.tooltip")
		}
		if (o == null) {
			h(document.body).unbind("mousemove.tooltip");
			return
		}
		if (r) {
			e(z);
			return
		}
		var B = d.parent[0].offsetLeft;
		var A = d.parent[0].offsetTop;
		if (z) {
			if (booking.env.touch_os) {
				B = h(o).offset().left;
				A = h(o).offset().top
			} else {
				B = z.pageX + f(o).left;
				A = z.pageY + f(o).top
			}
			var x = "auto";
			if (f(o).positionLeft) {
				x = h(window).width() - B;
				B = "auto"
			}
			d.parent.css({
				left : B,
				right : x,
				top : A
			})
		}
		if (booking.env.touch_os) {
			if (B > 700) {
				B = B - 150
			} else {
				if (B > 600) {
					B = B - 100
				}
			}
			d.parent.css({
				left : B + "px"
			})
		} else {
			var w = m(), y = d.parent[0];
			if (w.x + w.cx < y.offsetLeft + y.offsetWidth) {
				B -= y.offsetWidth + 20 + f(o).left;
				d.parent.css({
					left : B + "px"
				}).addClass("viewport-right")
			}
			if (w.y + w.cy < y.offsetTop + y.offsetHeight) {
				A -= y.offsetHeight + 20 + f(o).top;
				d.parent.css({
					top : A + "px"
				}).addClass("viewport-bottom")
			}
			if (y.offsetLeft < w.x) {
				B = 10;
				d.parent.css({
					left : B + "px"
				}).addClass("viewport-left")
			}
		}
	}
	function e(y) {
		var w = m();
		var x = d.parent[0];
		var A = y ? y.pageX + 12 : x.offsetLeft;
		var z = y ? y.pageY + 12 : x.offsetTop;
		if (w.x + w.cx < A + x.offsetWidth) {
			A = A - x.offsetWidth - 24;
			if (A < w.x + 5) {
				A = 5
			}
		}
		if (w.y + w.cy < z + x.offsetHeight + 5) {
			z = w.y + w.cy - x.offsetHeight - 5
		}
		d.parent.css({
			left : A,
			top : z
		})
	}
	function m() {
		return {
			x : h(window).scrollLeft(),
			y : h(window).scrollTop(),
			cx : h(window).width(),
			cy : h(window).height() - 11
		}
	}
	function j(y) {
		if (h.tooltip.blocked) {
			return
		}
		if (v) {
			clearTimeout(v)
		}
		o = null;
		var x = f(this);
		function w() {
			d.parent.removeClass(x.extraClass).hide().css("opacity", "")
		}
		if ((!n || !h.fn.bgiframe) && x.fade) {
			if (d.parent.is(":animated")) {
				d.parent.stop().fadeTo(x.fade, 0, w)
			} else {
				d.parent.stop().fadeOut(x.fade, w)
			}
		} else {
			w()
		}
		if (f(this).fixPNG) {
			d.parent.unfixPNG()
		}
	}
})(jQuery);
booking[sNSStartupLoad].tooltip_3 = {
	priority : 8,
	init : function() {
		this.addTooltip(document);
		return true
	},
	addTooltip : function(c) {
		$(".jq_tooltip", c).each(function() {
			if ($(this).attr("rel")) {
				var e = $(this).attr("rel").match(/\d+/)
			}
			if (booking.env.touch_os) {
				if (!$(this).hasClass("urgency_link")) {
					$(this).tooltip({
						showURL : false,
						track : false,
						opacity : 1,
						fade : 250,
						width : e,
						extraClass : "opaque"
					})
				}
			} else {
				$(this).tooltip({
					showURL : false,
					track : true,
					opacity : 1,
					fade : 250,
					width : e,
					left : -((e || 0) / 2),
					top : 18
				})
			}
		});
		$(".jq_tooltippex", c)
				.each(
						function() {
							var e = $(this).attr("rel");
							if (booking.env.touch_os) {
								$(this).click(function() {
									return false
								});
								if ($(this).get(0).tagName == "IMG") {
									$(this).wrap(
											"<span class='touchHoverBox' />");
									$(this)
											.parent()
											.append(
													"<img src='//q.bstatic.com/static/img/icons/imgplus.gif' class='touchHoverPlus' />")
								} else {
									$(this)
											.addClass("touchHoverBox")
											.append(
													"<img src='//q.bstatic.com/static/img/icons/imgplus.gif' class='touchHoverPlus' />")
								}
								$(this).tooltip({
									showURL : false,
									track : false,
									opacity : 1,
									fade : 250,
									width : e,
									extraClass : "opaque"
								})
							} else {
								$(this).tooltip({
									showURL : false,
									track : true,
									width : e,
									left : -((e || 0) / 2),
									top : 18,
									extraClass : "opaque"
								})
							}
						});
		if (booking.env.touch_os) {
			$(".policy_name.jq_tooltip, .policy_name_tt.jq_tooltip", c)
					.tooltip(
							{
								bodyHandler : function() {
									return $(this).siblings(
											".differing_policies").html()
								},
								showURL : false,
								track : false,
								opacity : 1,
								fade : 250,
								width : 400,
								extraClass : "opaque"
							})
		} else {
			$(".policy_name.jq_tooltip, .policy_name_tt.jq_tooltip", c)
					.tooltip(
							{
								bodyHandler : function() {
									return $(this).siblings(
											".differing_policies").html()
								},
								showURL : false,
								track : true,
								opacity : 1,
								fade : 250,
								width : 400,
								left : -((400 || 0) / 2),
								top : 18
							})
		}
		if (booking.env.touch_os && $("#tooltip:visible")) {
			function d() {
				$("#tooltip").hide()
			}
			$("body").click(d);
			$(".show_map").click(d)
		}
		if (booking.env.touch_os) {
			$("sup.jq_tooltip").removeAttr("onclick");
			$("tr.dotter").removeAttr("onclick")
		}
	}
};
booking[sNSExperiments].occupancy_policy = {
	priority : 9,
	init : function() {
		$(".occ_policy_tooltip.jq_tooltip").tooltip({
			bodyHandler : function() {
				return $(this).siblings(".occ_policy").html()
			},
			showURL : false,
			track : true,
			opacity : 1,
			fade : 250,
			left : -((400 || 0) / 2),
			top : 18
		});
		return true
	}
};
booking.ensureNamespaceExists(sNSStartup);
booking[sNSStartup].touch_device_check = {
	priority : 5,
	init : function() {
		booking.env.touch_os = ("ontouchstart" in document.documentElement) ? true
				: false;
		return true
	}
};
booking[sNSStartup].viewed_hotels = {
	priority : 9,
	fullListShowed : false,
	minListSize : 5,
	lastviewTimer : null,
	loadStart : null,
	init : function() {
		this.loadStart = new Date();
		var c = this;
		if (document.getElementById("LastViewedHotels")) {
			try {
				this.minListSize = parseInt($("#LastViewedHotels").attr("min"))
			} catch (d) {
			}
			$("a.remove_hotel").click(function() {
				var e = $(this).attr("href").substring(1);
				$.ajax({
					url : "/hotel_history",
					type : "DELETE",
					data : {
						hotel_id : e
					}
				});
				booking[sNSStartup].viewed_hotels.cleanupHistoryList(this);
				this.blur();
				return false
			});
			if ($("#showAllHistory").length) {
				$("#showAllHistory").click(function() {
					booking[sNSStartup].viewed_hotels.showAll();
					this.blur();
					return false
				})
			}
			if ($("#removeAllHistory").length) {
				$("#removeAllHistory").click(function() {
					booking[sNSStartup].viewed_hotels.removeAll(true);
					this.blur();
					return false
				})
			}
		}
		if ($(".lastVisitdate").length) {
			$(".lastVisitdate").parents("li").mouseenter(function() {
				var e = $(".lastVisitdate", this);
				$(e).slideDown("fast");
				$(this).addClass("selectedVisit");
				c.updateTime(e);
				c.lastviewTimer = window.setInterval(function() {
					c.updateTime(e)
				}, 1000)
			});
			$(".lastVisitdate").parents("li").mouseleave(function() {
				window.clearInterval(c.lastviewTimer);
				$(".lastVisitdate", this).slideUp("fast");
				$(this).removeClass("selectedVisit")
			})
		}
		return true
	},
	updateTime : function(q) {
		var r = this.loadStart;
		var o = new Date();
		if ($(q).attr("sh") == undefined) {
			$(q).attr("sd", $(".viewed_d", q).text());
			$(q).attr("sh", $(".viewed_h", q).text());
			$(q).attr("sm", $(".viewed_m", q).text());
			$(q).attr("ss", $(".viewed_s", q).text());
			if ($(q).attr("sd") == "") {
				$(q).attr("sd", "0")
			}
			if ($(q).attr("sh") == "") {
				$(q).attr("sh", "0")
			}
			if ($(q).attr("sm") == "") {
				$(q).attr("sm", "0")
			}
			if ($(q).attr("ss") == "") {
				$(q).attr("ss", "0")
			}
		}
		var c = 0;
		var g = 0;
		var l = 0;
		var n = 0;
		var u = o.getSeconds() - r.getSeconds();
		if (u < 0) {
			u = 60 - r.getSeconds() + o.getSeconds();
			c = 1
		}
		var f = o.getMinutes() - r.getMinutes() - c;
		if (f < 0) {
			f = 60 - r.getMinutes() + o.getMinutes() - c;
			g = 1
		}
		var k = o.getHours() - r.getHours() - g;
		if (k < 0) {
			k = 24 - r.getHours() + o.getHours() - g;
			l = 1
		}
		if (k > 24) {
			k = k - 24;
			n = 1 - l
		}
		var j = parseInt($(q).attr("sh")) + k;
		var e = parseInt($(q).attr("sm")) + f;
		var t = parseInt($(q).attr("ss")) + u;
		if (t > 59) {
			t = t - 60;
			e = e + 1
		}
		if (e > 59) {
			e = e - 60;
			j = j + 1
		}
		if (j > 23) {
			j = j - 24;
			n = n + 1
		}
		if (t == 0) {
			$(".viewed_s", q).text("");
			$(".viewed_seconds", q).removeClass("show");
			$(".viewed_second", q).removeClass("show")
		} else {
			$(".viewed_s", q).text(t);
			if (t == 1) {
				$(".viewed_seconds", q).removeClass("show");
				$(".viewed_second", q).addClass("show")
			} else {
				$(".viewed_seconds", q).addClass("show");
				$(".viewed_second", q).removeClass("show")
			}
		}
		if (e == 0) {
			$(".viewed_m", q).text("");
			$(".viewed_minutes", q).removeClass("show");
			$(".viewed_minute", q).removeClass("show")
		} else {
			$(".viewed_m", q).text(e);
			if (e == 1) {
				$(".viewed_minutes", q).removeClass("show");
				$(".viewed_minute", q).addClass("show")
			} else {
				$(".viewed_minutes", q).addClass("show");
				$(".viewed_minute", q).removeClass("show")
			}
		}
		if (j == 0) {
			$(".viewed_h", q).text("");
			$(".viewed_hours", q).removeClass("show");
			$(".viewed_hour", q).removeClass("show")
		} else {
			$(".viewed_h", q).text(j);
			if (j == 1) {
				$(".viewed_hours", q).removeClass("show");
				$(".viewed_hour", q).addClass("show")
			} else {
				$(".viewed_hours", q).addClass("show");
				$(".viewed_hour", q).removeClass("show")
			}
		}
		if (n == 0) {
			$(".viewed_d", q).text("");
			$(".viewed_days", q).removeClass("show");
			$(".viewed_day", q).removeClass("show")
		} else {
			$(".viewed_d", q).text(n);
			if (n == 1) {
				$(".viewed_days", q).removeClass("show");
				$(".viewed_day", q).addClass("show")
			} else {
				$(".viewed_days", q).addClass("show");
				$(".viewed_day", q).removeClass("show")
			}
		}
	},
	cleanupHistoryList : function(d) {
		var c = this.minListSize;
		$(d).parent().fadeOut(500, function() {
			$(d).parents("li").remove();
			var f = $("#LastViewedHotels ul.lastViewedList li");
			if (!f.length) {
				booking[sNSStartup].viewed_hotels.removeAll(false)
			}
			if (f.length < 2) {
				$(".hotel_comparison_link").hide();
				$("#share_hotel_history").css("borderTop", "none")
			}
			if (f.length >= c) {
				var e = f.get(c - 1);
				$(e).fadeIn(1000)
			}
			if (document.getElementById("showAllHistory")) {
				if (f.length <= c) {
					$("#moreHistoryLinkWrapper").hide()
				}
			}
		})
	},
	showAll : function() {
		var d = $("#LastViewedHotels ul.lastViewedList li");
		var c = this.minListSize;
		if (!booking[sNSStartup].viewed_hotels.fullListShowed) {
			for (i = c - 1; i < d.length; i++) {
				$(d[i]).fadeIn(500)
			}
			booking[sNSStartup].viewed_hotels.fullListShowed = true
		} else {
			for (i = c; i < d.length; i++) {
				$(d[i]).fadeOut(500)
			}
			booking[sNSStartup].viewed_hotels.fullListShowed = false
		}
		booking[sNSStartup].viewed_hotels.switchCaption()
	},
	removeAll : function(c) {
		if (c) {
			$.ajax({
				url : "/hotel_history",
				type : "DELETE",
				data : {
					hotel_id : -1
				}
			})
		}
		$("#LastViewedHotels").fadeOut(500, function() {
			$(this).remove()
		})
	},
	switchCaption : function() {
		if (booking[sNSStartup].viewed_hotels.fullListShowed) {
			$("#showAllHistory .showLink").hide();
			$("#showAllHistory .hideLink").show()
		} else {
			$("#showAllHistory .showLink").show();
			$("#showAllHistory .hideLink").hide()
		}
	}
};
booking[sNSStartupLoad].worldmapbox_2 = {
	priority : 8,
	curid : "",
	repositioned : false,
	init : function() {
		if ($("#map_holder").length) {
			var g;
			var f = $(document).width();
			if (f < 1020) {
				this.reposition()
			}
			$(window).resize(function() {
				booking[sNSStartupLoad].worldmapbox_2.reposition()
			});
			for ( var d = 0; d < 11; d++) {
				$("#continent_" + d)
						.mouseover(
								function() {
									booking[sNSStartupLoad].worldmapbox_2.curid = this.id
											.split("continent_")[1];
									g = setTimeout(function() {
										booking[sNSStartupLoad].worldmapbox_2
												.togleContinents()
									}, 300)
								});
				$("#continent_" + d).click(function() {
					return false
				});
				if (booking.env.b_site_experiment_worldmapbox_3) {
					$("#list_continent_" + d)
							.mouseover(
									function() {
										clearTimeout(g);
										var h = this.id
												.split("list_continent_")[1];
										booking[sNSStartupLoad].worldmapbox_2.curid = h;
										g = setTimeout(
												function() {
													booking[sNSStartupLoad].worldmapbox_2
															.togleContinents()
												}, 200)
									})
				} else {
					$("#list_continent_" + d).mouseover(function() {
						var h = this.id.split("list_continent_")[1];
						booking[sNSStartupLoad].worldmapbox_2.curid = h;
						booking[sNSStartupLoad].worldmapbox_2.togleContinents()
					})
				}
				$("#list_continent_" + d).click(function() {
					return false
				})
			}
			$(".country_wrapper")
					.mouseenter(
							function() {
								booking[sNSStartupLoad].worldmapbox_2.curid = booking[sNSStartupLoad].worldmapbox_2.oldid
							});
			$("#countrylist_10 li, #countrylist_2 li").appendTo(
					"#countrylist_1");
			$("#countrylist_7 li").appendTo("#countrylist_8");
			if ($(".start_selected").length) {
				var c = $(".start_selected").get(0);
				var e = c.id.split("link_continent_")[1];
				if (e == 7) {
					e = 8
				}
				if (e == 10 || e == 2) {
					e = 1
				}
				booking[sNSStartupLoad].worldmapbox_2.curid = e;
				booking[sNSStartupLoad].worldmapbox_2.togleContinents()
			}
			if (booking.env.b_site_experiment_worldmapbox_3) {
				$("ul.map_countrylist li:nth-child(4n+1)").addClass(
						"map_countrylist_clear")
			}
		}
		return true
	},
	togleContinents : function() {
		var h = [ 0, 60, 0, 120, 0, 230, 230, 0, 310, 380, 0 ];
		var f = [ 0, 160, 0, 200, 0, 180, 90, 0, 110, 220, 0 ];
		var g = booking[sNSStartupLoad].worldmapbox_2.oldid;
		if (g != "") {
			if (booking[sNSStartupLoad].worldmapbox_2.curid != g) {
				var e = $("#link_continent_" + g);
				var d = $("#list_continent_" + g);
				var c = $("#countrylist_" + g);
				$(e).removeClass("displayedContinent");
				$(d).removeClass("selected");
				if (booking.env.b_site_experiment_worldmapbox_3) {
					$(e).hide();
					$(c).hide()
				} else {
					$(e).hide(200);
					if (g == 6 || g == 8) {
						$("#more_countries").hide(50)
					}
					$(c).hide(500)
				}
				booking[sNSStartupLoad].worldmapbox_2.showContinent()
			}
		} else {
			booking[sNSStartupLoad].worldmapbox_2.showContinent()
		}
	},
	showContinent : function() {
		var e = $("#link_continent_"
				+ booking[sNSStartupLoad].worldmapbox_2.curid);
		var d = $("#list_continent_"
				+ booking[sNSStartupLoad].worldmapbox_2.curid);
		var c = $("#countrylist_" + booking[sNSStartupLoad].worldmapbox_2.curid);
		booking[sNSStartupLoad].worldmapbox_2.oldid = booking[sNSStartupLoad].worldmapbox_2.curid;
		$(e).addClass("displayedContinent");
		$(d).addClass("selected");
		if (booking.env.b_site_experiment_worldmapbox_3) {
			$(e).fadeIn(300);
			$(c).show()
		} else {
			$(e).show(600);
			$(c).show(500)
		}
		var f = $(c).attr("id").split("countrylist_")[1];
		if (f == 6 || f == 8) {
			$("#more_countries").show(200)
		}
	},
	reposition : function() {
		if (booking.env.b_site_experiment_worldmapbox_3) {
			var g = $("#worldmap_box3").width()
		} else {
			var g = $("#worldmap_box2").width()
		}
		if (g < 513) {
			var e = parseInt((g - 276) * 0.47) - 90;
			if ($.browser.msie) {
				var h = parseInt(70 + ((g - 276) * 0.1266));
				var d = (h < 100) ? "0." + h : "1";
				var f = (e > -21) ? e : "-20";
				document.getElementById("map_holder").style.zoom = d;
				document.getElementById("map_holder").style.marginLeft = f
						+ "px"
			} else {
				document.getElementById("map_holder").style.marginLeft = e
						+ "px"
			}
			this.repositioned = true;
			var c = $("#countrylist_"
					+ booking[sNSStartupLoad].worldmapbox_2.curid);
			var e = g - 10;
			$(c).css({
				width : e + "px !important"
			})
		} else {
			if (this.repositioned) {
				if ($.browser.msie) {
					document.getElementById("map_holder").style.zoom = "1"
				}
				document.getElementById("map_holder").style.marginLeft = "20px";
				this.repositioned = false
			}
		}
	}
};