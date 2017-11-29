Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PureDayPicker = exports.defaultProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _airbnbPropTypes = require('airbnb-prop-types');

var _reactWithStyles = require('react-with-styles');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _throttle = require('lodash/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _isTouchDevice = require('is-touch-device');

var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

var _defaultPhrases = require('../defaultPhrases');

var _getPhrasePropTypes = require('../utils/getPhrasePropTypes');

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

var _OutsideClickHandler = require('./OutsideClickHandler');

var _OutsideClickHandler2 = _interopRequireDefault(_OutsideClickHandler);

var _CalendarMonthGrid = require('./CalendarMonthGrid');

var _CalendarMonthGrid2 = _interopRequireDefault(_CalendarMonthGrid);

var _DayPickerNavigation = require('./DayPickerNavigation');

var _DayPickerNavigation2 = _interopRequireDefault(_DayPickerNavigation);

var _DayPickerKeyboardShortcuts = require('./DayPickerKeyboardShortcuts');

var _DayPickerKeyboardShortcuts2 = _interopRequireDefault(_DayPickerKeyboardShortcuts);

var _getCalendarMonthWidth = require('../utils/getCalendarMonthWidth');

var _getCalendarMonthWidth2 = _interopRequireDefault(_getCalendarMonthWidth);

var _getActiveElement = require('../utils/getActiveElement');

var _getActiveElement2 = _interopRequireDefault(_getActiveElement);

var _isDayVisible = require('../utils/isDayVisible');

var _isDayVisible2 = _interopRequireDefault(_isDayVisible);

var _ScrollableOrientationShape = require('../shapes/ScrollableOrientationShape');

var _ScrollableOrientationShape2 = _interopRequireDefault(_ScrollableOrientationShape);

var _DayOfWeekShape = require('../shapes/DayOfWeekShape');

var _DayOfWeekShape2 = _interopRequireDefault(_DayOfWeekShape);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MONTH_PADDING = 23;
var DAY_PICKER_PADDING = 9;
var PREV_TRANSITION = 'prev';
var NEXT_TRANSITION = 'next';
var PREV_YEAR_TRANSITION = 'prev-year';
var NEXT_YEAR_TRANSITION = 'next-year';

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)((0, _object2['default'])({}, _reactWithStyles.withStylesPropTypes, {

  // calendar presentation props
  enableOutsideDays: _propTypes2['default'].bool,
  numberOfMonths: _propTypes2['default'].number,
  orientation: _ScrollableOrientationShape2['default'],
  withPortal: _propTypes2['default'].bool,
  onOutsideClick: _propTypes2['default'].func,
  hidden: _propTypes2['default'].bool,
  initialVisibleMonth: _propTypes2['default'].func,
  firstDayOfWeek: _DayOfWeekShape2['default'],
  renderCalendarInfo: _propTypes2['default'].func,
  hideKeyboardShortcutsPanel: _propTypes2['default'].bool,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  isRTL: _propTypes2['default'].bool,
  verticalHeight: _airbnbPropTypes.nonNegativeInteger,

  // navigation props
  navPrev: _propTypes2['default'].node,
  navNext: _propTypes2['default'].node,
  onPrevMonthClick: _propTypes2['default'].func,
  onNextMonthClick: _propTypes2['default'].func,
  onPrevYearClick: _propTypes2['default'].func,
  onNextYearClick: _propTypes2['default'].func,
  onMultiplyScrollableMonths: _propTypes2['default'].func, // VERTICAL_SCROLLABLE daypickers only

  // month props
  renderMonth: _propTypes2['default'].func,

  // day props
  modifiers: _propTypes2['default'].object,
  renderDay: _propTypes2['default'].func,
  onDayClick: _propTypes2['default'].func,
  onDayMouseEnter: _propTypes2['default'].func,
  onDayMouseLeave: _propTypes2['default'].func,

  // accessibility props
  isFocused: _propTypes2['default'].bool,
  getFirstFocusableDay: _propTypes2['default'].func,
  onBlur: _propTypes2['default'].func,
  showKeyboardShortcuts: _propTypes2['default'].bool,

  // internationalization
  monthFormat: _propTypes2['default'].string,
  weekDayFormat: _propTypes2['default'].string,
  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.DayPickerPhrases)),
  dayAriaLabelFormat: _propTypes2['default'].string
}));

var defaultProps = exports.defaultProps = {
  // calendar presentation props
  enableOutsideDays: false,
  numberOfMonths: 2,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  withPortal: false,
  onOutsideClick: function () {
    function onOutsideClick() {}

    return onOutsideClick;
  }(),

  hidden: false,
  initialVisibleMonth: function () {
    function initialVisibleMonth() {
      return (0, _moment2['default'])();
    }

    return initialVisibleMonth;
  }(),
  firstDayOfWeek: null,
  renderCalendarInfo: null,
  hideKeyboardShortcutsPanel: false,
  daySize: _constants.DAY_SIZE,
  isRTL: false,
  verticalHeight: null,

  // navigation props
  navPrev: null,
  navNext: null,
  onPrevMonthClick: function () {
    function onPrevMonthClick() {}

    return onPrevMonthClick;
  }(),
  onNextMonthClick: function () {
    function onNextMonthClick() {}

    return onNextMonthClick;
  }(),
  onPrevYearClick: function () {
    function onPrevYearClick() {}

    return onPrevYearClick;
  }(),
  onNextYearClick: function () {
    function onNextYearClick() {}

    return onNextYearClick;
  }(),
  onMultiplyScrollableMonths: function () {
    function onMultiplyScrollableMonths() {}

    return onMultiplyScrollableMonths;
  }(),


  // month props
  renderMonth: null,

  // day props
  modifiers: {},
  renderDay: null,
  onDayClick: function () {
    function onDayClick() {}

    return onDayClick;
  }(),
  onDayMouseEnter: function () {
    function onDayMouseEnter() {}

    return onDayMouseEnter;
  }(),
  onDayMouseLeave: function () {
    function onDayMouseLeave() {}

    return onDayMouseLeave;
  }(),


  // accessibility props
  isFocused: false,
  getFirstFocusableDay: null,
  onBlur: function () {
    function onBlur() {}

    return onBlur;
  }(),

  showKeyboardShortcuts: false,

  // internationalization
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.DayPickerPhrases
};

var DayPicker = function (_React$Component) {
  _inherits(DayPicker, _React$Component);

  function DayPicker(props) {
    _classCallCheck(this, DayPicker);

    var _this = _possibleConstructorReturn(this, (DayPicker.__proto__ || Object.getPrototypeOf(DayPicker)).call(this, props));

    var currentMonth = props.hidden ? (0, _moment2['default'])() : props.initialVisibleMonth();

    var focusedDate = currentMonth.clone().startOf('month');
    if (props.getFirstFocusableDay) {
      focusedDate = props.getFirstFocusableDay(currentMonth);
    }

    var translationValue = props.isRTL && _this.isHorizontal() ? -(0, _getCalendarMonthWidth2['default'])(props.daySize) : 0;

    _this.hasSetInitialVisibleMonth = !props.hidden;
    _this.state = {
      currentMonth: currentMonth,
      monthTransition: null,
      translationValue: translationValue,
      scrollableMonthMultiple: 1,
      calendarMonthWidth: (0, _getCalendarMonthWidth2['default'])(props.daySize),
      focusedDate: !props.hidden || props.isFocused ? focusedDate : null,
      nextFocusedDate: null,
      showKeyboardShortcuts: props.showKeyboardShortcuts,
      onKeyboardShortcutsPanelClose: function () {
        function onKeyboardShortcutsPanelClose() {}

        return onKeyboardShortcutsPanelClose;
      }(),

      isTouchDevice: (0, _isTouchDevice2['default'])(),
      withMouseInteractions: true,
      hasSetHeight: false
    };

    _this.calendarMonthHeights = [];
    _this.calendarMonthGridHeight = 0;

    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.onPrevMonthClick = _this.onPrevMonthClick.bind(_this);
    _this.onNextMonthClick = _this.onNextMonthClick.bind(_this);
    _this.onPrevYearClick = _this.onPrevYearClick.bind(_this);
    _this.onNextYearClick = _this.onNextYearClick.bind(_this);
    _this.multiplyScrollableMonths = _this.multiplyScrollableMonths.bind(_this);
    _this.updateStateAfterMonthTransition = _this.updateStateAfterMonthTransition.bind(_this);

    _this.openKeyboardShortcutsPanel = _this.openKeyboardShortcutsPanel.bind(_this);
    _this.closeKeyboardShortcutsPanel = _this.closeKeyboardShortcutsPanel.bind(_this);

    _this.setContainerRef = _this.setContainerRef.bind(_this);
    _this.setTransitionContainerRef = _this.setTransitionContainerRef.bind(_this);
    _this.setCalendarMonthHeights = _this.setCalendarMonthHeights.bind(_this);
    return _this;
  }

  _createClass(DayPicker, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        this.setState({ isTouchDevice: (0, _isTouchDevice2['default'])() });
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentWillReceiveProps',
    value: function () {
      function componentWillReceiveProps(nextProps) {
        var hidden = nextProps.hidden,
            isFocused = nextProps.isFocused,
            showKeyboardShortcuts = nextProps.showKeyboardShortcuts,
            onBlur = nextProps.onBlur;
        var currentMonth = this.state.currentMonth;


        if (!hidden) {
          if (!this.hasSetInitialVisibleMonth) {
            this.hasSetInitialVisibleMonth = true;
            this.setState({
              currentMonth: nextProps.initialVisibleMonth()
            });
          }
        }

        if (nextProps.daySize !== this.props.daySize) {
          this.setState({
            calendarMonthWidth: (0, _getCalendarMonthWidth2['default'])(nextProps.daySize)
          });
        }

        if (isFocused !== this.props.isFocused) {
          if (isFocused) {
            var focusedDate = this.getFocusedDay(currentMonth);

            var onKeyboardShortcutsPanelClose = this.state.onKeyboardShortcutsPanelClose;

            if (nextProps.showKeyboardShortcuts) {
              // the ? shortcut came from the input and we should return input there once it is close
              onKeyboardShortcutsPanelClose = onBlur;
            }

            this.setState({
              showKeyboardShortcuts: showKeyboardShortcuts,
              onKeyboardShortcutsPanelClose: onKeyboardShortcutsPanelClose,
              focusedDate: focusedDate,
              withMouseInteractions: false
            });
          } else {
            this.setState({ focusedDate: null });
          }
        }
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'shouldComponentUpdate',
    value: function () {
      function shouldComponentUpdate(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare2['default'])(this, nextProps, nextState);
      }

      return shouldComponentUpdate;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate(prevProps) {
        var isFocused = this.props.isFocused;
        var focusedDate = this.state.focusedDate;


        if (!prevProps.isFocused && isFocused && !focusedDate) {
          this.container.focus();
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'onKeyDown',
    value: function () {
      function onKeyDown(e) {
        e.stopPropagation();

        this.setState({ withMouseInteractions: false });

        var _props = this.props,
            onBlur = _props.onBlur,
            isRTL = _props.isRTL;
        var _state = this.state,
            focusedDate = _state.focusedDate,
            showKeyboardShortcuts = _state.showKeyboardShortcuts;

        if (!focusedDate) return;

        var newFocusedDate = focusedDate.clone();

        var didTransitionMonth = false;

        // focus might be anywhere when the keyboard shortcuts panel is opened so we want to
        // return it to wherever it was before when the panel was opened
        var activeElement = (0, _getActiveElement2['default'])();
        var onKeyboardShortcutsPanelClose = function () {
          function onKeyboardShortcutsPanelClose() {
            if (activeElement) activeElement.focus();
          }

          return onKeyboardShortcutsPanelClose;
        }();

        switch (e.key) {
          case 'ArrowUp':
            e.preventDefault();
            newFocusedDate.subtract(1, 'week');
            didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
            break;
          case 'ArrowLeft':
            e.preventDefault();
            if (isRTL) {
              newFocusedDate.add(1, 'day');
            } else {
              newFocusedDate.subtract(1, 'day');
            }
            didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
            break;
          case 'Home':
            e.preventDefault();
            newFocusedDate.startOf('week');
            didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
            break;
          case 'PageUp':
            e.preventDefault();
            newFocusedDate.subtract(1, 'month');
            didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
            break;

          case 'ArrowDown':
            e.preventDefault();
            newFocusedDate.add(1, 'week');
            didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
            break;
          case 'ArrowRight':
            e.preventDefault();
            if (isRTL) {
              newFocusedDate.subtract(1, 'day');
            } else {
              newFocusedDate.add(1, 'day');
            }
            didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
            break;
          case 'End':
            e.preventDefault();
            newFocusedDate.endOf('week');
            didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
            break;
          case 'PageDown':
            e.preventDefault();
            newFocusedDate.add(1, 'month');
            didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
            break;

          case '?':
            this.openKeyboardShortcutsPanel(onKeyboardShortcutsPanelClose);
            break;

          case 'Escape':
            if (showKeyboardShortcuts) {
              this.closeKeyboardShortcutsPanel();
            } else {
              onBlur();
            }
            break;

          default:
            break;
        }

        // If there was a month transition, do not update the focused date until the transition has
        // completed. Otherwise, attempting to focus on a DOM node may interrupt the CSS animation. If
        // didTransitionMonth is true, the focusedDate gets updated in #updateStateAfterMonthTransition
        if (!didTransitionMonth) {
          this.setState({
            focusedDate: newFocusedDate
          });
        }
      }

      return onKeyDown;
    }()
  }, {
    key: 'onPrevMonthClick',
    value: function () {
      function onPrevMonthClick(nextFocusedDate, e) {
        var _props2 = this.props,
            numberOfMonths = _props2.numberOfMonths,
            isRTL = _props2.isRTL;
        var calendarMonthWidth = this.state.calendarMonthWidth;


        if (e) e.preventDefault();

        var translationValue = this.isVertical() ? this.calendarMonthHeights[0] : calendarMonthWidth;

        if (this.isHorizontal()) {
          if (isRTL) {
            translationValue = -2 * calendarMonthWidth;
          }

          var newMonthHeight = Math.max.apply(Math, [0].concat(_toConsumableArray(this.calendarMonthHeights.slice(0, numberOfMonths))));
          this.adjustDayPickerHeight(newMonthHeight);
        }

        this.setState({
          monthTransition: PREV_TRANSITION,
          translationValue: translationValue,
          focusedDate: null,
          nextFocusedDate: nextFocusedDate
        });
      }

      return onPrevMonthClick;
    }()
  }, {
    key: 'onNextMonthClick',
    value: function () {
      function onNextMonthClick(nextFocusedDate, e) {
        var isRTL = this.props.isRTL;
        var calendarMonthWidth = this.state.calendarMonthWidth;


        if (e) e.preventDefault();

        var translationValue = this.isVertical() ? -this.calendarMonthHeights[1] : -calendarMonthWidth;

        if (this.isHorizontal()) {
          if (isRTL) {
            translationValue = 0;
          }
          var newMonthHeight = Math.max.apply(Math, [0].concat(_toConsumableArray(this.calendarMonthHeights.slice(2))));
          this.adjustDayPickerHeight(newMonthHeight);
        }

        this.setState({
          monthTransition: NEXT_TRANSITION,
          translationValue: translationValue,
          focusedDate: null,
          nextFocusedDate: nextFocusedDate
        });
      }

      return onNextMonthClick;
    }()
  }, {
    key: 'onPrevYearClick',
    value: function () {
      function onPrevYearClick(nextFocusedDate, e) {
        var _props3 = this.props,
            numberOfMonths = _props3.numberOfMonths,
            isRTL = _props3.isRTL;
        var calendarMonthWidth = this.state.calendarMonthWidth;


        if (e) e.preventDefault();

        var translationValue = (this.isVertical() ? this.calendarMonthHeights[0] : calendarMonthWidth) * 12;

        if (this.isHorizontal()) {
          if (isRTL) {
            translationValue = -2 * calendarMonthWidth;
          }

          var newMonthHeight = Math.max.apply(Math, [0].concat(_toConsumableArray(this.calendarMonthHeights.slice(0, numberOfMonths))));
          this.adjustDayPickerHeight(newMonthHeight);
        }

        this.setState({
          monthTransition: PREV_YEAR_TRANSITION,
          translationValue: translationValue,
          focusedDate: null,
          nextFocusedDate: nextFocusedDate
        });
      }

      return onPrevYearClick;
    }()
  }, {
    key: 'onNextYearClick',
    value: function () {
      function onNextYearClick(nextFocusedDate, e) {
        var _props4 = this.props,
            numberOfMonths = _props4.numberOfMonths,
            isRTL = _props4.isRTL;
        var calendarMonthWidth = this.state.calendarMonthWidth;


        if (e) e.preventDefault();

        var translationValue = (this.isVertical() ? -this.calendarMonthHeights[1] : -calendarMonthWidth) * 12;

        if (this.isHorizontal()) {
          if (isRTL) {
            translationValue = 2 * calendarMonthWidth;
          }

          var newMonthHeight = Math.max.apply(Math, [0].concat(_toConsumableArray(this.calendarMonthHeights.slice(0, numberOfMonths))));
          this.adjustDayPickerHeight(newMonthHeight);
        }

        this.setState({
          monthTransition: NEXT_YEAR_TRANSITION,
          translationValue: translationValue,
          focusedDate: null,
          nextFocusedDate: nextFocusedDate
        });
      }

      return onNextYearClick;
    }()
  }, {
    key: 'getFirstVisibleIndex',
    value: function () {
      function getFirstVisibleIndex() {
        var orientation = this.props.orientation;
        var monthTransition = this.state.monthTransition;


        if (orientation === _constants.VERTICAL_SCROLLABLE) return 0;

        var firstVisibleMonthIndex = 1;
        if (monthTransition === PREV_TRANSITION) {
          firstVisibleMonthIndex -= 1;
        } else if (monthTransition === NEXT_TRANSITION) {
          firstVisibleMonthIndex += 1;
        }

        return firstVisibleMonthIndex;
      }

      return getFirstVisibleIndex;
    }()
  }, {
    key: 'getFocusedDay',
    value: function () {
      function getFocusedDay(newMonth) {
        var _props5 = this.props,
            getFirstFocusableDay = _props5.getFirstFocusableDay,
            numberOfMonths = _props5.numberOfMonths;


        var focusedDate = void 0;
        if (getFirstFocusableDay) {
          focusedDate = getFirstFocusableDay(newMonth);
        }

        if (newMonth && (!focusedDate || !(0, _isDayVisible2['default'])(focusedDate, newMonth, numberOfMonths))) {
          focusedDate = newMonth.clone().startOf('month');
        }

        return focusedDate;
      }

      return getFocusedDay;
    }()
  }, {
    key: 'setCalendarMonthHeights',
    value: function () {
      function setCalendarMonthHeights(calendarMonthHeights) {
        var numberOfMonths = this.props.numberOfMonths;

        var firstVisibleMonthIndex = this.getFirstVisibleIndex();
        var lastVisibleMonthIndex = firstVisibleMonthIndex + numberOfMonths;

        this.calendarMonthHeights = calendarMonthHeights;
        var visibleCalendarMonthHeights = calendarMonthHeights.filter(function (_, i) {
          return i >= firstVisibleMonthIndex && i < lastVisibleMonthIndex;
        });
        this.calendarMonthGridHeight = Math.max.apply(Math, [0].concat(_toConsumableArray(visibleCalendarMonthHeights))) + MONTH_PADDING;
        this.setState({ hasSetHeight: true });
      }

      return setCalendarMonthHeights;
    }()
  }, {
    key: 'setContainerRef',
    value: function () {
      function setContainerRef(ref) {
        this.container = ref;
      }

      return setContainerRef;
    }()
  }, {
    key: 'setTransitionContainerRef',
    value: function () {
      function setTransitionContainerRef(ref) {
        this.transitionContainer = ref;
      }

      return setTransitionContainerRef;
    }()
  }, {
    key: 'maybeTransitionNextMonth',
    value: function () {
      function maybeTransitionNextMonth(newFocusedDate) {
        var numberOfMonths = this.props.numberOfMonths;
        var _state2 = this.state,
            currentMonth = _state2.currentMonth,
            focusedDate = _state2.focusedDate;


        var newFocusedDateMonth = newFocusedDate.month();
        var focusedDateMonth = focusedDate.month();
        var isNewFocusedDateVisible = (0, _isDayVisible2['default'])(newFocusedDate, currentMonth, numberOfMonths);
        if (newFocusedDateMonth !== focusedDateMonth && !isNewFocusedDateVisible) {
          this.onNextMonthClick(newFocusedDate);
          return true;
        }

        return false;
      }

      return maybeTransitionNextMonth;
    }()
  }, {
    key: 'maybeTransitionPrevMonth',
    value: function () {
      function maybeTransitionPrevMonth(newFocusedDate) {
        var numberOfMonths = this.props.numberOfMonths;
        var _state3 = this.state,
            currentMonth = _state3.currentMonth,
            focusedDate = _state3.focusedDate;


        var newFocusedDateMonth = newFocusedDate.month();
        var focusedDateMonth = focusedDate.month();
        var isNewFocusedDateVisible = (0, _isDayVisible2['default'])(newFocusedDate, currentMonth, numberOfMonths);
        if (newFocusedDateMonth !== focusedDateMonth && !isNewFocusedDateVisible) {
          this.onPrevMonthClick(newFocusedDate);
          return true;
        }

        return false;
      }

      return maybeTransitionPrevMonth;
    }()
  }, {
    key: 'multiplyScrollableMonths',
    value: function () {
      function multiplyScrollableMonths(e) {
        var onMultiplyScrollableMonths = this.props.onMultiplyScrollableMonths;

        if (e) e.preventDefault();

        if (onMultiplyScrollableMonths) onMultiplyScrollableMonths(e);

        this.setState({
          scrollableMonthMultiple: this.state.scrollableMonthMultiple + 1
        });
      }

      return multiplyScrollableMonths;
    }()
  }, {
    key: 'isHorizontal',
    value: function () {
      function isHorizontal() {
        return this.props.orientation === _constants.HORIZONTAL_ORIENTATION;
      }

      return isHorizontal;
    }()
  }, {
    key: 'isVertical',
    value: function () {
      function isVertical() {
        return this.props.orientation === _constants.VERTICAL_ORIENTATION || this.props.orientation === _constants.VERTICAL_SCROLLABLE;
      }

      return isVertical;
    }()
  }, {
    key: 'updateStateAfterMonthTransition',
    value: function () {
      function updateStateAfterMonthTransition() {
        var _props6 = this.props,
            onPrevMonthClick = _props6.onPrevMonthClick,
            onNextMonthClick = _props6.onNextMonthClick,
            onPrevYearClick = _props6.onPrevYearClick,
            onNextYearClick = _props6.onNextYearClick;
        var _state4 = this.state,
            currentMonth = _state4.currentMonth,
            monthTransition = _state4.monthTransition,
            focusedDate = _state4.focusedDate,
            nextFocusedDate = _state4.nextFocusedDate,
            withMouseInteractions = _state4.withMouseInteractions,
            calendarMonthWidth = _state4.calendarMonthWidth;


        if (!monthTransition) return;

        var newMonth = currentMonth.clone();
        if (monthTransition === PREV_TRANSITION) {
          if (onPrevMonthClick) onPrevMonthClick();
          newMonth.subtract(1, 'month');
        } else if (monthTransition === NEXT_TRANSITION) {
          if (onNextMonthClick) onNextMonthClick();
          newMonth.add(1, 'month');
        } else if (monthTransition === PREV_YEAR_TRANSITION) {
          if (onPrevYearClick) onPrevYearClick();
          newMonth.subtract(12, 'months');
        } else if (monthTransition === NEXT_YEAR_TRANSITION) {
          if (onNextYearClick) onNextYearClick();
          newMonth.add(12, 'months');
        }

        var newFocusedDate = null;
        if (nextFocusedDate) {
          newFocusedDate = nextFocusedDate;
        } else if (!focusedDate && !withMouseInteractions) {
          newFocusedDate = this.getFocusedDay(newMonth);
        }

        this.setState({
          currentMonth: newMonth,
          monthTransition: null,
          translationValue: this.props.isRTL && this.isHorizontal() ? -calendarMonthWidth : 0,
          nextFocusedDate: null,
          focusedDate: newFocusedDate
        }, function () {
          // we don't want to focus on the relevant calendar day after a month transition
          // if the user is navigating around using a mouse
          if (withMouseInteractions) {
            var activeElement = (0, _getActiveElement2['default'])();
            if (activeElement && activeElement !== document.body) {
              activeElement.blur();
            }
          }
        });
      }

      return updateStateAfterMonthTransition;
    }()
  }, {
    key: 'adjustDayPickerHeight',
    value: function () {
      function adjustDayPickerHeight(newMonthHeight) {
        var monthHeight = newMonthHeight + MONTH_PADDING;
        if (monthHeight !== this.calendarMonthGridHeight) {
          this.calendarMonthGridHeight = monthHeight;
          this.transitionContainer.style.height = String(monthHeight) + 'px';
        }
      }

      return adjustDayPickerHeight;
    }()
  }, {
    key: 'openKeyboardShortcutsPanel',
    value: function () {
      function openKeyboardShortcutsPanel(onCloseCallBack) {
        this.setState({
          showKeyboardShortcuts: true,
          onKeyboardShortcutsPanelClose: onCloseCallBack
        });
      }

      return openKeyboardShortcutsPanel;
    }()
  }, {
    key: 'closeKeyboardShortcutsPanel',
    value: function () {
      function closeKeyboardShortcutsPanel() {
        var onKeyboardShortcutsPanelClose = this.state.onKeyboardShortcutsPanelClose;


        if (onKeyboardShortcutsPanelClose) {
          onKeyboardShortcutsPanelClose();
        }

        this.setState({
          onKeyboardShortcutsPanelClose: null,
          showKeyboardShortcuts: false
        });
      }

      return closeKeyboardShortcutsPanel;
    }()
  }, {
    key: 'renderNavigation',
    value: function () {
      function renderNavigation() {
        var _this2 = this;

        var _props7 = this.props,
            navPrev = _props7.navPrev,
            navNext = _props7.navNext,
            orientation = _props7.orientation,
            phrases = _props7.phrases,
            isRTL = _props7.isRTL;


        var onNextMonthClick = void 0;
        if (orientation === _constants.VERTICAL_SCROLLABLE) {
          onNextMonthClick = this.multiplyScrollableMonths;
        } else {
          onNextMonthClick = function () {
            function onNextMonthClick(e) {
              _this2.onNextMonthClick(null, e);
            }

            return onNextMonthClick;
          }();
        }

        return _react2['default'].createElement(_DayPickerNavigation2['default'], {
          onPrevMonthClick: function () {
            function onPrevMonthClick(e) {
              _this2.onPrevMonthClick(null, e);
            }

            return onPrevMonthClick;
          }(),
          onNextMonthClick: onNextMonthClick,
          onPrevYearClick: function () {
            function onPrevYearClick(e) {
              _this2.onPrevYearClick(null, e);
            }

            return onPrevYearClick;
          }(),
          onNextYearClick: function () {
            function onNextYearClick(e) {
              _this2.onNextYearClick(null, e);
            }

            return onNextYearClick;
          }(),
          navPrev: navPrev,
          navNext: navNext,
          orientation: orientation,
          phrases: phrases,
          isRTL: isRTL
        });
      }

      return renderNavigation;
    }()
  }, {
    key: 'renderWeekHeader',
    value: function () {
      function renderWeekHeader(index) {
        var _props8 = this.props,
            daySize = _props8.daySize,
            orientation = _props8.orientation,
            weekDayFormat = _props8.weekDayFormat,
            styles = _props8.styles;
        var calendarMonthWidth = this.state.calendarMonthWidth;

        var verticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
        var horizontalStyle = {
          left: index * calendarMonthWidth
        };
        var verticalStyle = {
          marginLeft: -calendarMonthWidth / 2
        };

        var weekHeaderStyle = {}; // no styles applied to the vertical-scrollable orientation
        if (this.isHorizontal()) {
          weekHeaderStyle = horizontalStyle;
        } else if (this.isVertical() && !verticalScrollable) {
          weekHeaderStyle = verticalStyle;
        }

        var firstDayOfWeek = this.props.firstDayOfWeek;

        if (firstDayOfWeek == null) {
          firstDayOfWeek = _moment2['default'].localeData().firstDayOfWeek();
        }

        var header = [];
        for (var i = 0; i < 7; i += 1) {
          header.push(_react2['default'].createElement(
            'li',
            _extends({ key: i }, (0, _reactWithStyles.css)(styles.DayPicker_weekHeader_li, { width: daySize })),
            _react2['default'].createElement(
              'small',
              null,
              (0, _moment2['default'])().day((i + firstDayOfWeek) % 7).format(weekDayFormat)
            )
          ));
        }

        return _react2['default'].createElement(
          'div',
          _extends({}, (0, _reactWithStyles.css)(styles.DayPicker_weekHeader, this.isVertical() && styles.DayPicker_weekHeader__vertical, verticalScrollable && styles.DayPicker_weekHeader__verticalScrollable, weekHeaderStyle), {
            key: 'week-' + String(index)
          }),
          _react2['default'].createElement(
            'ul',
            (0, _reactWithStyles.css)(styles.DayPicker_weekHeader_ul),
            header
          )
        );
      }

      return renderWeekHeader;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _this3 = this;

        var _state5 = this.state,
            calendarMonthWidth = _state5.calendarMonthWidth,
            currentMonth = _state5.currentMonth,
            monthTransition = _state5.monthTransition,
            translationValue = _state5.translationValue,
            scrollableMonthMultiple = _state5.scrollableMonthMultiple,
            focusedDate = _state5.focusedDate,
            showKeyboardShortcuts = _state5.showKeyboardShortcuts,
            isTouch = _state5.isTouchDevice,
            hasSetHeight = _state5.hasSetHeight;
        var _props9 = this.props,
            enableOutsideDays = _props9.enableOutsideDays,
            numberOfMonths = _props9.numberOfMonths,
            orientation = _props9.orientation,
            modifiers = _props9.modifiers,
            withPortal = _props9.withPortal,
            onDayClick = _props9.onDayClick,
            onDayMouseEnter = _props9.onDayMouseEnter,
            onDayMouseLeave = _props9.onDayMouseLeave,
            firstDayOfWeek = _props9.firstDayOfWeek,
            renderMonth = _props9.renderMonth,
            renderDay = _props9.renderDay,
            renderCalendarInfo = _props9.renderCalendarInfo,
            hideKeyboardShortcutsPanel = _props9.hideKeyboardShortcutsPanel,
            onOutsideClick = _props9.onOutsideClick,
            monthFormat = _props9.monthFormat,
            daySize = _props9.daySize,
            isFocused = _props9.isFocused,
            isRTL = _props9.isRTL,
            styles = _props9.styles,
            phrases = _props9.phrases,
            verticalHeight = _props9.verticalHeight,
            dayAriaLabelFormat = _props9.dayAriaLabelFormat;


        var numOfWeekHeaders = this.isVertical() ? 1 : numberOfMonths;
        var weekHeaders = [];
        for (var i = 0; i < numOfWeekHeaders; i += 1) {
          weekHeaders.push(this.renderWeekHeader(i));
        }

        var verticalScrollable = this.props.orientation === _constants.VERTICAL_SCROLLABLE;
        var firstVisibleMonthIndex = this.getFirstVisibleIndex();
        var horizontalWidth = calendarMonthWidth * numberOfMonths + 2 * DAY_PICKER_PADDING;

        var dayPickerStyle = {
          width: this.isHorizontal() && horizontalWidth,

          // These values are to center the datepicker (approximately) on the page
          marginLeft: this.isHorizontal() && withPortal && -horizontalWidth / 2,
          marginTop: this.isHorizontal() && withPortal && -calendarMonthWidth / 2
        };

        var height = void 0;
        if (this.isHorizontal()) {
          height = this.calendarMonthGridHeight;
        } else if (this.isVertical() && !verticalScrollable && !withPortal) {
          // If the user doesn't set a desired height,
          // we default back to this kind of made-up value that generally looks good
          height = verticalHeight || 1.75 * calendarMonthWidth;
        }

        var transitionContainerStyle = {
          width: this.isHorizontal() && horizontalWidth,
          height: height
        };

        var isCalendarMonthGridAnimating = monthTransition !== null;
        var transformType = this.isVertical() ? 'translateY' : 'translateX';
        var transformValue = transformType + '(' + String(translationValue) + 'px)';

        var shouldFocusDate = !isCalendarMonthGridAnimating && isFocused;

        var keyboardShortcutButtonLocation = _DayPickerKeyboardShortcuts.BOTTOM_RIGHT;
        if (this.isVertical()) {
          keyboardShortcutButtonLocation = withPortal ? _DayPickerKeyboardShortcuts.TOP_LEFT : _DayPickerKeyboardShortcuts.TOP_RIGHT;
        }

        var isHorizontalAndAnimating = this.isHorizontal() && isCalendarMonthGridAnimating;

        return _react2['default'].createElement(
          'div',
          _extends({
            role: 'application',
            'aria-label': phrases.calendarLabel
          }, (0, _reactWithStyles.css)(styles.DayPicker, this.isHorizontal() && styles.DayPicker__horizontal, this.isVertical() && styles.DayPicker__vertical, verticalScrollable && styles.DayPicker__verticalScrollable, this.isHorizontal() && withPortal && styles.DayPicker_portal__horizontal, this.isVertical() && withPortal && styles.DayPicker_portal__vertical, dayPickerStyle, !hasSetHeight && styles.DayPicker__hidden)),
          _react2['default'].createElement(
            _OutsideClickHandler2['default'],
            { onOutsideClick: onOutsideClick },
            _react2['default'].createElement(
              'div',
              _extends({}, (0, _reactWithStyles.css)(styles.DayPicker_weekHeaders, this.isHorizontal() && styles.DayPicker_weekHeaders__horizontal), {
                'aria-hidden': 'true',
                role: 'presentation'
              }),
              weekHeaders
            ),
            _react2['default'].createElement(
              'div',
              _extends({}, (0, _reactWithStyles.css)(styles.DayPicker_focusRegion), {
                ref: this.setContainerRef,
                onClick: function () {
                  function onClick(e) {
                    e.stopPropagation();
                  }

                  return onClick;
                }(),
                onKeyDown: (0, _throttle2['default'])(this.onKeyDown, 300),
                onMouseUp: function () {
                  function onMouseUp() {
                    _this3.setState({ withMouseInteractions: true });
                  }

                  return onMouseUp;
                }(),
                role: 'region',
                tabIndex: -1
              }),
              !verticalScrollable && this.renderNavigation(),
              _react2['default'].createElement(
                'div',
                _extends({}, (0, _reactWithStyles.css)(styles.DayPicker_transitionContainer, isHorizontalAndAnimating && styles.DayPicker_transitionContainer__horizontal, this.isVertical() && styles.DayPicker_transitionContainer__vertical, verticalScrollable && styles.DayPicker_transitionContainer__verticalScrollable, transitionContainerStyle), {
                  ref: this.setTransitionContainerRef
                }),
                _react2['default'].createElement(_CalendarMonthGrid2['default'], {
                  setCalendarMonthHeights: this.setCalendarMonthHeights,
                  transformValue: transformValue,
                  enableOutsideDays: enableOutsideDays,
                  firstVisibleMonthIndex: firstVisibleMonthIndex,
                  initialMonth: currentMonth,
                  isAnimating: isCalendarMonthGridAnimating,
                  modifiers: modifiers,
                  orientation: orientation,
                  numberOfMonths: numberOfMonths * scrollableMonthMultiple,
                  onDayClick: onDayClick,
                  onDayMouseEnter: onDayMouseEnter,
                  onDayMouseLeave: onDayMouseLeave,
                  renderMonth: renderMonth,
                  renderDay: renderDay,
                  onMonthTransitionEnd: this.updateStateAfterMonthTransition,
                  monthFormat: monthFormat,
                  daySize: daySize,
                  firstDayOfWeek: firstDayOfWeek,
                  isFocused: shouldFocusDate,
                  focusedDate: focusedDate,
                  phrases: phrases,
                  isRTL: isRTL,
                  dayAriaLabelFormat: dayAriaLabelFormat
                }),
                verticalScrollable && this.renderNavigation()
              ),
              !isTouch && !hideKeyboardShortcutsPanel && _react2['default'].createElement(_DayPickerKeyboardShortcuts2['default'], {
                block: this.isVertical() && !withPortal,
                buttonLocation: keyboardShortcutButtonLocation,
                showKeyboardShortcutsPanel: showKeyboardShortcuts,
                openKeyboardShortcutsPanel: this.openKeyboardShortcutsPanel,
                closeKeyboardShortcutsPanel: this.closeKeyboardShortcutsPanel,
                phrases: phrases
              })
            ),
            renderCalendarInfo && renderCalendarInfo()
          )
        );
      }

      return render;
    }()
  }]);

  return DayPicker;
}(_react2['default'].Component);

DayPicker.propTypes = propTypes;
DayPicker.defaultProps = defaultProps;

exports.PureDayPicker = DayPicker;
exports['default'] = (0, _reactWithStyles.withStyles)(function (_ref) {
  var _ref$reactDates = _ref.reactDates,
      color = _ref$reactDates.color,
      zIndex = _ref$reactDates.zIndex;
  return {
    DayPicker: {
      background: color.background,
      position: 'relative',
      textAlign: 'left'
    },

    DayPicker__horizontal: {
      background: color.background,
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07)',
      borderRadius: 3
    },

    DayPicker__verticalScrollable: {
      height: '100%'
    },

    DayPicker__hidden: {
      visibility: 'hidden'
    },

    DayPicker_portal__horizontal: {
      boxShadow: 'none',
      position: 'absolute',
      left: '50%',
      top: '50%'
    },

    DayPicker_portal__vertical: {
      position: 'initial'
    },

    DayPicker_focusRegion: {
      outline: 'none'
    },

    DayPicker_weekHeaders: {
      position: 'relative'
    },

    DayPicker_weekHeaders__horizontal: {
      marginLeft: 9
    },

    DayPicker_weekHeader: {
      color: color.placeholderText,
      position: 'absolute',
      top: 62,
      zIndex: zIndex + 2,
      padding: '0 13px',
      textAlign: 'left'
    },

    DayPicker_weekHeader__vertical: {
      left: '50%'
    },

    DayPicker_weekHeader__verticalScrollable: {
      top: 0,
      display: 'table-row',
      borderBottom: '1px solid ' + String(color.core.border),
      background: color.background,
      marginLeft: 0,
      left: 0,
      width: '100%',
      textAlign: 'center'
    },

    DayPicker_weekHeader_ul: {
      listStyle: 'none',
      margin: '1px 0',
      paddingLeft: 0,
      paddingRight: 0
    },

    DayPicker_weekHeader_li: {
      display: 'inline-block',
      textAlign: 'center'
    },

    DayPicker_transitionContainer: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 3
    },

    DayPicker_transitionContainer__horizontal: {
      transition: 'height 0.2s ease-in-out'
    },

    DayPicker_transitionContainer__vertical: {
      width: '100%'
    },

    DayPicker_transitionContainer__verticalScrollable: {
      paddingTop: 20,
      height: '100%',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      overflowY: 'scroll'
    }
  };
})(DayPicker);