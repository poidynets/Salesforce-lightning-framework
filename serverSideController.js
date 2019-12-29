({
  echo: function(cmp) {
    var action = cmp.get("c.serverEcho");
    action.setParams({ firstName: cmp.get("v.firstName") });
    action.setCallback(this, function(response) {
      var state = response.getState();
      if (state === "SUCCESS") {
        alert("From Server:" + response.getReturnValue());
      } else if (state === "INCOMPLETE") {
      } else if (state === "ERROR") {
        var errors = response.getError();
        if (errors) {
          console.log("error " + errors);
        }
      }
    });
    $A.enqueueAction(action);
  }
});
