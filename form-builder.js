
$.getScript( "//cdnjs.cloudflare.com/ajax/libs/jstree/3.3.5/jstree.min.js", function( data, textStatus, jqxhr ) {
            console.log( data ); // Data returned
            console.log( textStatus ); // Success
            console.log( jqxhr.status ); // 200
            console.log( "Load was performed." );
          });


// var jsonData = [{"id":"j1_1","text":"Root node 1","icon":true,"li_attr":{"id":false},"a_attr":{"href":"#","id":"j1_1_anchor"},"state":{"loaded":true,"opened":true,"selected":false,"disabled":false},"data":{},"children":[{"id":"j1_2","text":"Child node 1","icon":true,"li_attr":{"id":false},"a_attr":{"href":"#","id":"j1_2_anchor"},"state":{"loaded":true,"opened":false,"selected":false,"disabled":false},"data":{},"children":[],"type":"default"},{"id":"j1_3","text":"Child node 2","icon":true,"li_attr":{"id":false},"a_attr":{"href":"#","id":"j1_3_anchor"},"state":{"loaded":true,"opened":false,"selected":false,"disabled":false},"data":{},"children":[],"type":"default"}],"type":"default"}];

// // var jsonData = [{"id":"j1_1","text":"Root node 1","icon":true,"li_attr":{"id":"j1_1"},"a_attr":{"href":"#","id":"j1_1_anchor"},"state":{"loaded":true,"opened":true,"selected":true,"disabled":false},"data":{},"children":[{"id":"j1_3","text":"Child node 2","icon":true,"li_attr":{"id":"j1_3"},"a_attr":{"href":"#","id":"j1_3_anchor"},"state":{"loaded":true,"opened":true,"selected":true,"disabled":false},"data":{},"children":[{"id":"j1_4","text":"New node","icon":true,"li_attr":{"id":"j1_4"},"a_attr":{"href":"#","id":"j1_4_anchor"},"state":{"loaded":true,"opened":true,"selected":true,"disabled":false},"data":{},"children":[{"id":"j1_10","text":"New node","icon":true,"li_attr":{"id":"j1_10"},"a_attr":{"href":"#","id":"j1_10_anchor"},"state":{"loaded":true,"opened":false,"selected":true,"disabled":false},"data":{},"children":[]},{"id":"j1_11","text":"New node","icon":true,"li_attr":{"id":"j1_11"},"a_attr":{"href":"#","id":"j1_11_anchor"},"state":{"loaded":true,"opened":false,"selected":true,"disabled":false},"data":{},"children":[]}]}]}]}];


// function init() {
// 	$('#html1')
// 	  .on('changed.jstree', function (e, data) {
// 	    var objNode = data.instance.get_node(data.selected);
// 	  })
// 	  .jstree({
// 	  core: {
// 	  	check_callback: true,
// 	    data: jsonData
// 	  },
// 	  plugins : [ "contextmenu", "dnd",  "checkbox"]
// 	});

// };




function demo_create() {
	var ref = $('#html1').jstree(true),
		sel = ref.get_selected();
	if(!sel.length) { return false; }
	sel = sel[0];
	sel = ref.create_node(sel, {"type":"file"});
	if(sel) {
		ref.edit(sel);
	}
};
function demo_rename() {
	var ref = $('#html1').jstree(true),
		sel = ref.get_selected();
	if(!sel.length) { return false; }
	sel = sel[0];
	ref.edit(sel);
};
function demo_delete() {
	var ref = $('#html1').jstree(true),
		sel = ref.get_selected();
	if(!sel.length) { return false; }
	ref.delete_node(sel);
};






