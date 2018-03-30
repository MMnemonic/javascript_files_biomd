
$.getScript( "//cdnjs.cloudflare.com/ajax/libs/jstree/3.3.5/jstree.min.js", function( data, textStatus, jqxhr ) {
            console.log( data ); // Data returned
            console.log( textStatus ); // Success
            console.log( jqxhr.status ); // 200
            console.log( "Load was performed." );
          });



function init() {
    $('#html1').jstree({
		'core' : {
			"themes" : { "stripes" : true },	
			"force_text" : true,
			"check_callback" : true
		},
		"plugins" : [ 
			"contextmenu", "dnd", "search",
			"state", "types", "wholerow", "checkbox" ]
	});

	var to = false;
	$('#demo_q').keyup(function () {
		if(to) { clearTimeout(to); }
		to = setTimeout(function () {
			var v = $('#demo_q').val();
			$('#html1').jstree(true).search(v);
		}, 250);
	});


	$('#html1').jstree({
		"core" : {
			"animation" : 0,
			"check_callback" : true,
			'force_text' : true,
			"themes" : { "stripes" : true },
			'data' : {
				'url' : function (node) {
					return node.id === '#' ? '/static/3.3.5/assets/ajax_demo_roots.json' : '/static/3.3.5/assets/ajax_demo_children.json';
				},
				'data' : function (node) {
					return { 'id' : node.id };
				}
			}
		},
		"types" : {
			"#" : { "max_children" : 1, "max_depth" : 4, "valid_children" : ["root"] },
			"root" : { "icon" : "/static/3.3.5/assets/images/tree_icon.png", "valid_children" : ["default"] },
			"default" : { "valid_children" : ["default","file"] },
			"file" : { "icon" : "glyphicon glyphicon-file", "valid_children" : [] }
		},
		"plugins" : [ "contextmenu", "dnd", "search"]
	});

};


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





