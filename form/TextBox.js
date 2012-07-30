define([
'dojo/_base/declare',
'dijit/form/TextBox',
'dojo/text!./templates/TextBox.html'
], function(declare, TextBox, template){

    return declare('form.TextBox', [TextBox], {
        templateString: template,

        postCreate: function(){
            this.inherited(arguments);
            this.connect(this.deselectNode, "onclick", "_onDeselectClick");
            this.toggleDeselectButton();
        },

        toggleDeselectButton: function(){
            // using displayedValue so we can also deselect an invalid
            // value. Invalid values doesn't get into the value field.
            if(this.displayedValue && !this.disabled){
                this.deselectNode.style.display = '';
            }
            else{
                this.deselectNode.style.display = 'none';
            }
        },

        _onDeselectClick: function(/* Event */ e){
            this.set('value', '');
        },

        _setValueAttr: function(val){
            this.inherited(arguments);
            this.toggleDeselectButton();
        },

        _setDisabledAttr: function(val){
            this.inherited(arguments);
            this.toggleDeselectButton();
        }

    });
});