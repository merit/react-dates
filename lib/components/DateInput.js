Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = require('airbnb-prop-types');

var _reactWithStyles = require('react-with-styles');

var _throttle = require('lodash/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _isTouchDevice = require('is-touch-device');

var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

var _OpenDirectionShape = require('../shapes/OpenDirectionShape');

var _OpenDirectionShape2 = _interopRequireDefault(_OpenDirectionShape);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)((0, _object2['default'])({}, _reactWithStyles.withStylesPropTypes, {
  id: _propTypes2['default'].string.isRequired,
  placeholder: _propTypes2['default'].string, // also used as label
  displayValue: _propTypes2['default'].string,
  screenReaderMessage: _propTypes2['default'].string,
  focused: _propTypes2['default'].bool,
  disabled: _propTypes2['default'].bool,
  required: _propTypes2['default'].bool,
  readOnly: _propTypes2['default'].bool,
  openDirection: _OpenDirectionShape2['default'],
  showCaret: _propTypes2['default'].bool,

  onChange: _propTypes2['default'].func,
  onFocus: _propTypes2['default'].func,
  onKeyDownShiftTab: _propTypes2['default'].func,
  onKeyDownTab: _propTypes2['default'].func,

  onKeyDownArrowDown: _propTypes2['default'].func,
  onKeyDownQuestionMark: _propTypes2['default'].func,

  // accessibility
  isFocused: _propTypes2['default'].bool // describes actual DOM focus
}));

var defaultProps = {
  placeholder: 'Select Date',
  displayValue: '',
  screenReaderMessage: '',
  focused: false,
  disabled: false,
  required: false,
  readOnly: null,
  openDirection: _constants.OPEN_DOWN,
  showCaret: false,

  onChange: function () {
    function onChange() {}

    return onChange;
  }(),
  onFocus: function () {
    function onFocus() {}

    return onFocus;
  }(),
  onKeyDownShiftTab: function () {
    function onKeyDownShiftTab() {}

    return onKeyDownShiftTab;
  }(),
  onKeyDownTab: function () {
    function onKeyDownTab() {}

    return onKeyDownTab;
  }(),
  onKeyDownArrowDown: function () {
    function onKeyDownArrowDown() {}

    return onKeyDownArrowDown;
  }(),
  onKeyDownQuestionMark: function () {
    function onKeyDownQuestionMark() {}

    return onKeyDownQuestionMark;
  }(),


  // accessibility
  isFocused: false
};

var DateInput = function (_React$Component) {
  _inherits(DateInput, _React$Component);

  function DateInput(props) {
    _classCallCheck(this, DateInput);

    var _this = _possibleConstructorReturn(this, (DateInput.__proto__ || Object.getPrototypeOf(DateInput)).call(this, props));

    _this.state = {
      dateString: '',
      isTouchDevice: false
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.setInputRef = _this.setInputRef.bind(_this);
    return _this;
  }

  _createClass(DateInput, [{
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
        if (!this.props.displayValue && nextProps.displayValue) {
          this.setState({
            dateString: ''
          });
        }
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate(prevProps) {
        var _props = this.props,
            focused = _props.focused,
            isFocused = _props.isFocused;

        if (prevProps.focused === focused && prevProps.isFocused === isFocused) return;

        if (focused && isFocused) {
          this.inputRef.focus();
        } else {
          this.inputRef.blur();
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'onChange',
    value: function () {
      function onChange(e) {
        var _props2 = this.props,
            onChange = _props2.onChange,
            onKeyDownQuestionMark = _props2.onKeyDownQuestionMark;

        var dateString = e.target.value;

        // In Safari, onKeyDown does not consistently fire ahead of onChange. As a result, we need to
        // special case the `?` key so that it always triggers the appropriate callback, instead of
        // modifying the input value
        if (dateString[dateString.length - 1] === '?') {
          onKeyDownQuestionMark(e);
        } else {
          this.setState({ dateString: dateString });
          onChange(dateString);
        }
      }

      return onChange;
    }()
  }, {
    key: 'onKeyDown',
    value: function () {
      function onKeyDown(e) {
        e.stopPropagation();

        var _props3 = this.props,
            onKeyDownShiftTab = _props3.onKeyDownShiftTab,
            onKeyDownTab = _props3.onKeyDownTab,
            onKeyDownArrowDown = _props3.onKeyDownArrowDown,
            onKeyDownQuestionMark = _props3.onKeyDownQuestionMark;
        var key = e.key;

        if (key === 'Tab') {
          if (e.shiftKey) {
            onKeyDownShiftTab(e);
          } else {
            onKeyDownTab(e);
          }
        } else if (key === 'ArrowDown') {
          onKeyDownArrowDown(e);
        } else if (key === '?') {
          e.preventDefault();
          onKeyDownQuestionMark(e);
        }
      }

      return onKeyDown;
    }()
  }, {
    key: 'setInputRef',
    value: function () {
      function setInputRef(ref) {
        this.inputRef = ref;
      }

      return setInputRef;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _state = this.state,
            dateString = _state.dateString,
            isTouch = _state.isTouchDevice;
        var _props4 = this.props,
            id = _props4.id,
            placeholder = _props4.placeholder,
            displayValue = _props4.displayValue,
            screenReaderMessage = _props4.screenReaderMessage,
            focused = _props4.focused,
            showCaret = _props4.showCaret,
            onFocus = _props4.onFocus,
            disabled = _props4.disabled,
            required = _props4.required,
            readOnly = _props4.readOnly,
            openDirection = _props4.openDirection,
            styles = _props4.styles;


        var value = displayValue || dateString || '';
        var screenReaderMessageId = 'DateInput__screen-reader-message-' + String(id);

        var withCaret = showCaret && focused;

        return _react2['default'].createElement(
          'div',
          (0, _reactWithStyles.css)(styles.DateInput, withCaret && styles.DateInput__withCaret, disabled && styles.DateInput__disabled, withCaret && openDirection === _constants.OPEN_DOWN && styles.DateInput__openDown, withCaret && openDirection === _constants.OPEN_UP && styles.DateInput__openUp),
          _react2['default'].createElement('input', _extends({}, (0, _reactWithStyles.css)(styles.DateInput_input, readOnly && styles.DateInput_input__readOnly, focused && styles.DateInput_input__focused, disabled && styles.DateInput_input__disabled), {
            'aria-label': placeholder,
            type: 'text',
            id: id,
            name: id,
            ref: this.setInputRef,
            value: value,
            onChange: this.onChange,
            onKeyDown: (0, _throttle2['default'])(this.onKeyDown, 300),
            onFocus: onFocus,
            placeholder: placeholder,
            autoComplete: 'off',
            disabled: disabled,
            readOnly: typeof readOnly === 'boolean' ? readOnly : isTouch,
            required: required,
            'aria-describedby': screenReaderMessage && screenReaderMessageId
          })),
          screenReaderMessage && _react2['default'].createElement(
            'p',
            _extends({}, (0, _reactWithStyles.css)(styles.DateInput_screenReaderMessage), { id: screenReaderMessageId }),
            screenReaderMessage
          )
        );
      }

      return render;
    }()
  }]);

  return DateInput;
}(_react2['default'].Component);

DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;

exports['default'] = (0, _reactWithStyles.withStyles)(function (_ref) {
  var _ref$reactDates = _ref.reactDates,
      border = _ref$reactDates.border,
      color = _ref$reactDates.color,
      sizing = _ref$reactDates.sizing,
      spacing = _ref$reactDates.spacing,
      font = _ref$reactDates.font,
      zIndex = _ref$reactDates.zIndex;

  var inputHeight = parseInt(font.input.lineHeight, 10) + 2 * spacing.inputPadding + 2 * spacing.displayTextPaddingVertical;

  return {
    DateInput: {
      fontWeight: 200,
      fontSize: font.input.size,
      lineHeight: font.input.lineHeight,
      color: color.placeholderText,
      margin: 0,
      padding: spacing.inputPadding,

      background: color.background,
      position: 'relative',
      display: 'inline-block',
      width: sizing.inputWidth,
      verticalAlign: 'middle'
    },

    DateInput__withCaret: {
      ':before': {
        content: '""',
        display: 'inline-block',
        position: 'absolute',
        bottom: 'auto',
        border: sizing.tooltipArrowWidth / 2 + 'px solid transparent',
        left: 22,
        zIndex: zIndex + 2
      },

      ':after': {
        content: '""',
        display: 'inline-block',
        position: 'absolute',
        bottom: 'auto',
        border: sizing.tooltipArrowWidth / 2 + 'px solid transparent',
        left: 22,
        zIndex: zIndex + 2
      }
    },

    DateInput__openUp: {
      ':before': {
        borderBottom: 0,
        top: inputHeight - spacing.inputMarginBottom,
        borderTopColor: 'rgba(0, 0, 0, 0.1)'
      },

      ':after': {
        borderBottom: 0,
        top: inputHeight - spacing.inputMarginBottom - 1,
        borderTopColor: color.background
      }
    },

    DateInput__openDown: {
      ':before': {
        borderTop: 0,
        top: spacing.inputMarginBottom - sizing.tooltipArrowWidth / 2,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)'
      },

      ':after': {
        borderTop: 0,
        top: spacing.inputMarginBottom - sizing.tooltipArrowWidth / 2 + 1,
        borderBottomColor: color.background
      }
    },

    DateInput__disabled: {
      background: color.disabled,
      color: color.textDisabled
    },

    DateInput_input: {
      fontWeight: 200,
      fontSize: font.input.size,
      color: color.text,
      backgroundColor: color.background,
      width: '100%',
      padding: String(spacing.displayTextPaddingVertical) + 'px ' + String(spacing.displayTextPaddingHorizontal) + 'px',
      border: border.input.border,
      borderTop: border.input.borderTop,
      borderRight: border.input.borderRight,
      borderBottom: border.input.borderBottom,
      borderLeft: border.input.borderLeft
    },

    DateInput_input__readOnly: {
      userSelect: 'none'
    },

    DateInput_input__focused: {
      outline: border.input.outlineFocused,
      background: color.backgroundFocused,
      border: border.input.borderFocused,
      borderTop: border.input.borderTopFocused,
      borderRight: border.input.borderRightFocused,
      borderBottom: border.input.borderBottomFocused,
      borderLeft: border.input.borderLeftFocused
    },

    DateInput_input__disabled: {
      background: color.disabled,
      fontStyle: font.input.styleDisabled
    },

    DateInput_screenReaderMessage: {
      border: 0,
      clip: 'rect(0, 0, 0, 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: 1
    }
  };
})(DateInput);