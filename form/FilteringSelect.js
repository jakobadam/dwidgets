define([
'dojo/_base/declare',
'dijit/form/FilteringSelect',
'form/TextBox',
'dojo/text!./templates/DropDownBox.html'
], function(declare, FilteringSelect, TextBox, template){

    return declare('form.FilteringSelect', [FilteringSelect, TextBox], {

        templateString: template,

        //remove state classes
		cssStateNodes: {}

    });
});