// configure the class for runtime loading
if (!window.fbControls) window.fbControls = new Array();
window.fbControls.push(function (controlClass) {

  /**
   * Treeview Form class
   */
  class controlTreeview extends controlClass {

    configure() {
      this.js = '../form-builder.js';
      this.css = '../../css/form-builder.css';
      //this.css = '//cdnjs.cloudflare.com/ajax/libs/jstree/3.3.5/themes/default/style.min.css';
    }

    /**
     * build a text DOM element, supporting other jquery text form-control's
     * @return DOM Element to be injected into the form.
     */
    build() {
      //return this.markup('<h1>Test h1</h1>', null, {id: this.config.name});
      return {
        field: '<div class="row"> \
                    <div class="col-md-4 col-sm-8 col-xs-8"> \
                      <button type="button" class="btn btn-success btn-sm" onclick="demo_create();"><i class="glyphicon glyphicon-asterisk"></i> Create</button> \
                      <button type="button" class="btn btn-warning btn-sm" onclick="demo_rename();"><i class="glyphicon glyphicon-pencil"></i> Rename</button> \
                       <button type="button" class="btn btn-danger btn-sm" onclick="demo_delete();"><i class="glyphicon glyphicon-remove"></i> Delete</button> \
                    </div> \
                <div class="col-md-2 col-sm-4 col-xs-4" style="text-align:right;"> \
                  <input type="text" value="" style="box-shadow:inset 0 0 4px #eee; width:120px; margin:0; padding:6px 12px; border-radius:4px; border:1px solid silver; font-size:1.1em;" id="demo_q" placeholder="Search" /> \
                </div> \
          </div>  <div id="html1"><ul><li>Root node 1<ul><li>Child node 1</li><li>Child node 2</li></ul></li></ul></div>'
      }
    }

    onRender() {
      //let value = this.config.value || 3.6;
      //$.getScript('../jstree.min.js');
      //$.getScript('../form-builder.js');
      $('#html1').jstree(); 
    }
  }

  // register this control for the following types & text subtypes
  controlClass.register('treeview', controlTreeview);
  return controlTreeview;
});