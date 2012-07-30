require([
'doh',
'dojo/store/Memory',
'dwidgets/form/TextBox',
'dwidgets/form/FilteringSelect'
], function(doh, Memory, TextBox, FilteringSelect){

    var data = [
        {id:1, name:"One"},
        {id:2, name:"Two"},
        {id:3, name:"Three"}
    ];

    var store = new Memory({data:data});

    var tb = new TextBox({
        'class': 'minimal'
    }, 'textbox');

    var tb_v = new TextBox({
        value:'1'
    }, 'textbox_with_preset_value');

    var tb_ex = new TextBox({
        'class': 'expandableMinimal'
    }, 'textbox_expandable');

    var tb_ex_q = new TextBox({
        'class': 'expandableMinimal queryTextBox'
    }, 'textbox_expandable_query');

    var fs = new FilteringSelect({
        store:store,
        placeholder: 'Search',
        'class':'queryTextBox',
        style:{width:'200px'}}, 'filtering_select');

    var fs_v = new FilteringSelect({
       store:store,
       value: 1
    }, 'filtering_select_with_preset_value');

    var fs_ex = new FilteringSelect({
       store:store,
       'class':'expandable queryTextBox'
    }, 'filtering_select_expandable');

    doh.register("tests.widgets", [

        function select_with_no_value_should_not_have_deselect_option(t){
            t.is('none', fs.deselectNode.style.display);
        },

        function disabling_widget_should_hide_the_deselect_option(t){
            fs.set('disabled', true);
            t.is('none', fs.deselectNode.style.display);
            // change back again
            fs.set('disabled', false);
        },

        function select_with_a_value_should_have_deselect_option(t){
            t.is('', tb_v.deselectNode.style.display);
        },

        function deselecting_should_hide_deselect_option(t){
            tb_v.set('value', '');
            t.is('none', tb_v.deselectNode.style.display);
            // change back again
            tb_v.set('value', 1);
        },

        function disabling_widget_should_hide_the_deselect_option(t){
            tb_v.set('disabled', true);
            t.is('none', tb_v.deselectNode.style.display);
            // change back again
            tb_v.set('disabled', false);
        }
    ]);

    doh.run();

});

require([
'dojo/query',
'dojox/highlight',
'dojox/highlight/languages/_www',
'dojo/domReady!'
], function(query, highlight){
    query("code").forEach(highlight.init);
});


