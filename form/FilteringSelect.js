define([
'dojo/_base/declare',
'dijit/form/FilteringSelect',
'dwidgets/form/TextBox',
'dojo/text!./templates/DropDownBox.html'
], function(declare, FilteringSelect, TextBox, template){

    return declare('dwidgets.form.FilteringSelect', [FilteringSelect, TextBox], {

        templateString: template,

        //remove state classes
		cssStateNodes: {}

    });
});