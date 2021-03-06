let app = require('scripts/app')
let widget = require('scripts/widget')
let today = require('scripts/today')
let ui = require('scripts/ui')
let utils = require('scripts/utils')
let auth = require("scripts/auth");
let update = require("scripts/update");

auth.start()

if ($app.env == $env.today) {
  if(utils.getCache("haveBanned") === true) {
    ui.showBannedAlert()
  } else if($app.widgetIndex == -1) {
    today.show()
  } else {
    widget.show()
  }
} else {
  update.checkUpdate()
}