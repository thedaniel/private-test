const EventKit = require('event-kit')

module.exports =
function listen (element, eventName, selector, handler) {
  var innerHandler = function (event) {
    if (selector) {
      var currentTarget = event.target
      while (currentTarget) {
        if (currentTarget.matches && currentTarget.matches(selector)) {
          handler({
            type: event.type,
            currentTarget: currentTarget,
            target: event.target,
            preventDefault: function () {
              event.preventDefault()
            },
            originalEvContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


            asdf


            asd
            f

            w


            ee
            werwerwer
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.ent: event
          })
        }
        if (currentTarget === element) break
        currentTarget = currentTarget.parentNode
      }
    } else {
      handler({
        type: event.type,
        currentTarget: event.currentTarget,
        target: event.target,
        preventDefault: function () {
          event.preventDefault()
        },
        originalEvent: event
      })
    }
  }

  element.addEventListener(eventName, innerHandler)

  return new EventKit.Disposable(function () {
    element.removeEventListener(eventName, innerHandler)
  })
}
