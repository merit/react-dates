Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = require('airbnb-prop-types');

var _reactWithStyles = require('react-with-styles');

var _defaultPhrases = require('../defaultPhrases');

var _getPhrasePropTypes = require('../utils/getPhrasePropTypes');

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

var _LeftArrow = require('./LeftArrow');

var _LeftArrow2 = _interopRequireDefault(_LeftArrow);

var _RightArrow = require('./RightArrow');

var _RightArrow2 = _interopRequireDefault(_RightArrow);

var _ChevronUp = require('./ChevronUp');

var _ChevronUp2 = _interopRequireDefault(_ChevronUp);

var _ChevronDown = require('./ChevronDown');

var _ChevronDown2 = _interopRequireDefault(_ChevronDown);

var _ScrollableOrientationShape = require('../shapes/ScrollableOrientationShape');

var _ScrollableOrientationShape2 = _interopRequireDefault(_ScrollableOrientationShape);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var DblLeftArrow = function () {
  function DblLeftArrow(props) {
    return _react2['default'].createElement(
      'svg',
      props,
      _react2['default'].createElement('path', {
        d: 'M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z'
      }),
      _react2['default'].createElement('path', {
        d: 'M551.768 275.712l-210.1 210 398.355 9.785c13 0 181.513-1.742 181.513 11.258S739.324 519.97 726.324 519.97l-384.656 11.742 210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z'
      })
    );
  }

  return DblLeftArrow;
}();

DblLeftArrow.defaultProps = {
  viewBox: '0 0 1000 1000',
  xmlns: 'http://www.w3.org/2000/svg'
};

var DblRightArrow = function () {
  function DblRightArrow(props) {
    return _react2['default'].createElement(
      'svg',
      props,
      _react2['default'].createElement('path', {
        d: 'M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z'
      }),
      _react2['default'].createElement('path', {
        d: 'M478.034 242.555l249.1 249.1c11 11 11 21 0 32l-249.1 249.2c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1-403.753-16.468c-13 0-52.278-1.766-52.278-14.766s27.384-7.447 40.384-7.447l415.647-7.319-210.1-210.1c-21-21.1 11-53.1 32-32.1z'
      })
    );
  }

  return DblRightArrow;
}();

DblRightArrow.defaultProps = {
  viewBox: '0 0 1000 1000',
  xmlns: 'http://www.w3.org/2000/svg'
};


var propTypes = (0, _airbnbPropTypes.forbidExtraProps)((0, _object2['default'])({}, _reactWithStyles.withStylesPropTypes, {
  navPrev: _propTypes2['default'].node,
  navNext: _propTypes2['default'].node,
  orientation: _ScrollableOrientationShape2['default'],

  onPrevMonthClick: _propTypes2['default'].func,
  onPrevYearClick: _propTypes2['default'].func,
  onNextMonthClick: _propTypes2['default'].func,
  onNextYearClick: _propTypes2['default'].func,

  // internationalization
  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.DayPickerNavigationPhrases)),

  isRTL: _propTypes2['default'].bool
}));

var defaultProps = {
  navPrev: null,
  navNext: null,
  orientation: _constants.HORIZONTAL_ORIENTATION,

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


  // internationalization
  phrases: _defaultPhrases.DayPickerNavigationPhrases,
  isRTL: false
};

function DayPickerNavigation(_ref) {
  var navPrev = _ref.navPrev,
      navNext = _ref.navNext,
      onPrevMonthClick = _ref.onPrevMonthClick,
      onNextMonthClick = _ref.onNextMonthClick,
      onPrevYearClick = _ref.onPrevYearClick,
      onNextYearClick = _ref.onNextYearClick,
      orientation = _ref.orientation,
      phrases = _ref.phrases,
      isRTL = _ref.isRTL,
      styles = _ref.styles;

  var isHorizontal = orientation === _constants.HORIZONTAL_ORIENTATION;
  var isVertical = orientation !== _constants.HORIZONTAL_ORIENTATION;
  var isVerticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;

  var navDblPrevIcon = navPrev;
  var navPrevIcon = navPrev;
  var navNextIcon = navNext;
  var navDblNextIcon = navNext;

  var styleIcon = function styleIcon(I) {
    return _react2['default'].createElement(I, (0, _reactWithStyles.css)(isHorizontal && styles.DayPickerNavigation_svg__horizontal, isVertical && styles.DayPickerNavigation_svg__vertical));
  };

  if (!navPrevIcon) {
    isDefaultNavPrev = true;
    PrevIcon = isVertical ? _ChevronUp2['default'] : _LeftArrow2['default'];
    DblPrevIcon = isVertical ? _ChevronUp2['default'] : DblLeftArrow;
    if (isRTL && !isVertical) {
      PrevIcon = _RightArrow2['default'];
      DblPrevIcon = DblRightArrow;
    }
    navPrevIcon = styleIcon(PrevIcon);
    navDblPrevIcon = styleIcon(DblPrevIcon);
  }

  if (!navNextIcon) {
    isDefaultNavNext = true;
    NextIcon = isVertical ? _ChevronDown2['default'] : _RightArrow2['default'];
    DblNextIcon = isVertical ? _ChevronDown2['default'] : DblRightArrow;
    if (isRTL && !isVertical) {
      NextIcon = _RightArrow2['default'];
      DblNextIcon = DblRightArrow;
    }
    navNextIcon = styleIcon(NextIcon);
    navDblNextIcon = styleIcon(DblNextIcon);
  }

  return _react2['default'].createElement(
    'div',
    (0, _reactWithStyles.css)(styles.DayPickerNavigation_container, isHorizontal && styles.DayPickerNavigation_container__horizontal, isVertical && styles.DayPickerNavigation_container__vertical, isVerticalScrollable && styles.DayPickerNavigation_container__verticalScrollable),
    !isVerticalScrollable && _react2['default'].createElement(
      'button',
      _extends({}, _reactWithStyles.css.apply(undefined, [styles.DayPickerNavigation_button, isDefaultNavPrev && styles.DayPickerNavigation_button__default].concat(_toConsumableArray(isHorizontal && [styles.DayPickerNavigation_button__horizontal, !isRTL && styles.DayPickerNavigation_leftMostButton__horizontal, isRTL && styles.DayPickerNavigation_rightMostButton__horizontal]), _toConsumableArray(isVertical && [styles.DayPickerNavigation_button__vertical, styles.DayPickerNavigation_prevButton__vertical, isDefaultNavPrev && styles.DayPickerNavigation_button__vertical__default]))), {
        type: 'button',
        'aria-label': phrases.jumpToPrevYear,
        onClick: onPrevYearClick,
        onMouseUp: function () {
          function onMouseUp(e) {
            e.currentTarget.blur();
          }

          return onMouseUp;
        }()
      }),
      navDblPrevIcon
    ),
    !isVerticalScrollable && _react2['default'].createElement(
      'button',
      _extends({}, _reactWithStyles.css.apply(undefined, [styles.DayPickerNavigation_button, isDefaultNavPrev && styles.DayPickerNavigation_button__default].concat(_toConsumableArray(isHorizontal && [styles.DayPickerNavigation_button__horizontal, !isRTL && styles.DayPickerNavigation_leftButton__horizontal, isRTL && styles.DayPickerNavigation_rightButton__horizontal]), _toConsumableArray(isVertical && [styles.DayPickerNavigation_button__vertical, styles.DayPickerNavigation_prevButton__vertical, isDefaultNavPrev && styles.DayPickerNavigation_button__vertical__default]))), {
        type: 'button',
        'aria-label': phrases.jumpToPrevMonth,
        onClick: onPrevMonthClick,
        onMouseUp: function () {
          function onMouseUp(e) {
            e.currentTarget.blur();
          }

          return onMouseUp;
        }()
      }),
      navPrevIcon
    ),
    _react2['default'].createElement(
      'button',
      _extends({}, _reactWithStyles.css.apply(undefined, [styles.DayPickerNavigation_button, isDefaultNavNext && styles.DayPickerNavigation_button__default].concat(_toConsumableArray(isHorizontal && [styles.DayPickerNavigation_button__horizontal, isRTL && styles.DayPickerNavigation_leftButton__horizontal, !isRTL && styles.DayPickerNavigation_rightButton__horizontal]), _toConsumableArray(isVertical && [styles.DayPickerNavigation_button__vertical, styles.DayPickerNavigation_nextButton__vertical, isDefaultNavNext && styles.DayPickerNavigation_button__vertical__default, isDefaultNavNext && styles.DayPickerNavigation_nextButton__vertical__default]), [isVerticalScrollable && styles.DayPickerNavigation_nextButton__verticalScrollable])), {
        type: 'button',
        'aria-label': phrases.jumpToNextMonth,
        onClick: onNextMonthClick,
        onMouseUp: function () {
          function onMouseUp(e) {
            e.currentTarget.blur();
          }

          return onMouseUp;
        }()
      }),
      navNextIcon
    ),
    _react2['default'].createElement(
      'button',
      _extends({}, _reactWithStyles.css.apply(undefined, [styles.DayPickerNavigation_button, isDefaultNavNext && styles.DayPickerNavigation_button__default].concat(_toConsumableArray(isHorizontal && [styles.DayPickerNavigation_button__horizontal, isRTL && styles.DayPickerNavigation_leftMostButton__horizontal, !isRTL && styles.DayPickerNavigation_rightMostButton__horizontal]), _toConsumableArray(isVertical && [styles.DayPickerNavigation_button__vertical, styles.DayPickerNavigation_nextButton__vertical, isDefaultNavNext && styles.DayPickerNavigation_button__vertical__default, isDefaultNavNext && styles.DayPickerNavigation_nextButton__vertical__default]), [isVerticalScrollable && styles.DayPickerNavigation_nextButton__verticalScrollable])), {
        type: 'button',
        'aria-label': phrases.jumpToNextMonth,
        onClick: onNextYearClick,
        onMouseUp: function () {
          function onMouseUp(e) {
            e.currentTarget.blur();
          }

          return onMouseUp;
        }()
      }),
      navDblNextIcon
    )
  );
}

DayPickerNavigation.propTypes = propTypes;
DayPickerNavigation.defaultProps = defaultProps;

exports['default'] = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      zIndex = _ref2$reactDates.zIndex;
  return {
    DayPickerNavigation_container: {
      position: 'relative',
      zIndex: zIndex + 2
    },

    DayPickerNavigation_container__horizontal: {},

    DayPickerNavigation_container__vertical: {
      background: color.background,
      boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.1)',
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 52,
      width: '100%'
    },

    DayPickerNavigation_container__verticalScrollable: {
      position: 'relative'
    },

    DayPickerNavigation_button: {
      cursor: 'pointer',
      lineHeight: 0.78,
      userSelect: 'none'
    },

    DayPickerNavigation_button__default: {
      border: '1px solid ' + String(color.core.borderLight),
      backgroundColor: color.background,
      color: color.placeholderText,

      ':focus': {
        border: '1px solid ' + String(color.core.borderMedium)
      },

      ':hover': {
        border: '1px solid ' + String(color.core.borderMedium),
        zIndex: 1
      },

      ':active': {
        background: color.backgroundDark
      }
    },

    DayPickerNavigation_button__horizontal: {
      borderRadius: 3,
      padding: '6px 9px',
      top: 18,
      position: 'absolute'
    },

    DayPickerNavigation_leftButton__horizontal: {
      left: 60
    },
    DayPickerNavigation_leftMostButton__horizontal: {
      left: 22
    },

    DayPickerNavigation_rightButton__horizontal: {
      right: 60
    },
    DayPickerNavigation_rightMostButton__horizontal: {
      right: 22
    },

    DayPickerNavigation_button__vertical: {
      display: 'inline-block',
      position: 'relative',
      height: '100%',
      width: '50%'
    },

    DayPickerNavigation_button__vertical__default: {
      padding: 5
    },

    DayPickerNavigation_nextButton__vertical__default: {
      borderLeft: 0
    },

    DayPickerNavigation_nextButton__verticalScrollable: {
      width: '100%'
    },

    DayPickerNavigation_svg__horizontal: {
      height: 19,
      width: 19,
      fill: color.core.grayLight
    },

    DayPickerNavigation_svg__vertical: {
      height: 42,
      width: 42,
      fill: color.text
    }
  };
})(DayPickerNavigation);