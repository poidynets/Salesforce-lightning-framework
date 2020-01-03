({
    locationChange : function(component, event, helper) {
        var token=event.getParams("token");
        if(token.indexOf('contact/')===0){
            var contactId=token.substr(token.indeOf('/')+1);
            var action=component.get("c.findById");
            action.setParams({"contactId":contactId});
        }
        action.setCallback(this,function(a){
                           component.set("v.contact",a.getReturnValue());
        
    });
    $A.enqueueAction(action);
}
 })
