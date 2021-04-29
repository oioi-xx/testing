$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })


    var bar = new ProgressBar.Circle(container, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#5dd6d4',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = 'Neuzeit Grotesk';
    bar.text.style.fontSize = '2rem';
});
/*-------------------------------------1번째프로그래스------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })


    var bar = new ProgressBar.Circle(container1, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#5dd6d4',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = 'Neuzeit Grotesk';
    bar.text.style.fontSize = '2rem';
});
/*-------------------------------------2번째프로그래스------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })


    var bar = new ProgressBar.Circle(container2, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#5dd6d4',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = 'Neuzeit Grotesk';
    bar.text.style.fontSize = '2rem';
});
/*-------------------------------------3번째프로그래스------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })


    var bar = new ProgressBar.Circle(container3, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#5dd6d4',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = 'Neuzeit Grotesk';
    bar.text.style.fontSize = '2rem';
});
/*-------------------------------------4번째프로그래스------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })


    var bar = new ProgressBar.Circle(container4, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#5dd6d4',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = 'Neuzeit Grotesk';
    bar.text.style.fontSize = '2rem';
});
/*-------------------------------------5번째프로그래스------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })


    var bar = new ProgressBar.Circle(container5, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#5dd6d4',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = 'Neuzeit Grotesk';
    bar.text.style.fontSize = '2rem';
});
/*-------------------------------------6번째프로그래스------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })


    var bar = new ProgressBar.Circle(container6, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#5dd6d4',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = 'Neuzeit Grotesk';
    bar.text.style.fontSize = '2rem';
});
/*-------------------------------------7번째프로그래스------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })


    var bar = new ProgressBar.Circle(container7, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#5dd6d4',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = 'Neuzeit Grotesk';
    bar.text.style.fontSize = '2rem';
});
/*-------------------------------------8번째프로그래스------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })


    var bar = new ProgressBar.Circle(container8, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#5dd6d4',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = 'Neuzeit Grotesk';
    bar.text.style.fontSize = '2rem';
});

/*-------------------------------------mobile-response-graph------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })

    var bar = new ProgressBar.Line(mobilecontainer, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        text: {
            style: {
                // Text color.
                // Default: same as stroke color (options.color)
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '30px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {
            color: '#FFEA82'
        },
        to: {
            color: '#ED6A5A'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
});
/*-------------------------------------mobile-response-graph------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })

    var bar = new ProgressBar.Line(mobilecontainer1, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        text: {
            style: {
                // Text color.
                // Default: same as stroke color (options.color)
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '30px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {
            color: '#FFEA82'
        },
        to: {
            color: '#ED6A5A'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
});/*-------------------------------------mobile-response-graph------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })

    var bar = new ProgressBar.Line(mobilecontainer2, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        text: {
            style: {
                // Text color.
                // Default: same as stroke color (options.color)
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '30px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {
            color: '#FFEA82'
        },
        to: {
            color: '#ED6A5A'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
});/*-------------------------------------mobile-response-graph------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })

    var bar = new ProgressBar.Line(mobilecontainer3, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        text: {
            style: {
                // Text color.
                // Default: same as stroke color (options.color)
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '30px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {
            color: '#FFEA82'
        },
        to: {
            color: '#ED6A5A'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
});/*-------------------------------------mobile-response-graph------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })

    var bar = new ProgressBar.Line(mobilecontainer4, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        text: {
            style: {
                // Text color.
                // Default: same as stroke color (options.color)
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '30px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {
            color: '#FFEA82'
        },
        to: {
            color: '#ED6A5A'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
});/*-------------------------------------mobile-response-graph------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })

    var bar = new ProgressBar.Line(mobilecontainer5, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        text: {
            style: {
                // Text color.
                // Default: same as stroke color (options.color)
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '30px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {
            color: '#FFEA82'
        },
        to: {
            color: '#ED6A5A'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
});/*-------------------------------------mobile-response-graph------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })

    var bar = new ProgressBar.Line(mobilecontainer6, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        text: {
            style: {
                // Text color.
                // Default: same as stroke color (options.color)
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '30px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {
            color: '#FFEA82'
        },
        to: {
            color: '#ED6A5A'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
});/*-------------------------------------mobile-response-graph------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })

    var bar = new ProgressBar.Line(mobilecontainer7, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        text: {
            style: {
                // Text color.
                // Default: same as stroke color (options.color)
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '30px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {
            color: '#FFEA82'
        },
        to: {
            color: '#ED6A5A'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
});/*-------------------------------------mobile-response-graph------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })

    var bar = new ProgressBar.Line(mobilecontainer8, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        text: {
            style: {
                // Text color.
                // Default: same as stroke color (options.color)
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '30px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {
            color: '#FFEA82'
        },
        to: {
            color: '#ED6A5A'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
});