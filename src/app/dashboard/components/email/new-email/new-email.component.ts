import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'angular-email-editor';

@Component({
  selector: 'app-new-email',
  templateUrl: './new-email.component.html',
  styleUrls: ['./new-email.component.css']
})
export class NewEmailComponent implements OnInit {

  options = {};

  constructor() { }

  ngOnInit(): void {
    this.options = this.loadOptions();
  }

  title = 'angular-email-editor';

  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent | undefined;

  loadDesign(){
    const json = JSON.parse('');
    this.emailEditor?.loadDesign(json);
  }

  // called when the editor is created
  editorLoaded(event:any) {
    console.log('editorLoaded');

    this.emailEditor?.editor.addEventListener("design:updated", function (data:any) {
      // Design is updated by the user
      var type = data.type; // body, row, content
      var item = data.item;
      var changes = data.changes;
      console.log("design:updated", type, item, changes);
    });

    // if(this.emailEditor && this.emailEditor.editor){
    //   this.emailEditor.editor.registerCallback('image', function (file, done) {
    //     // Handle file upload here
    //     console.log(file);
    //     console.log(done);
    //   });
    // }
    

    // load the design json here
    // this.emailEditor.editor.loadDesign({});
  }

  // called when the editor has finished loading
  editorReady(event: any) {
    console.log('editorReady');
  }

  saveDesign() {
    this.emailEditor?.editor.saveDesign((data:any) =>
      console.log('saveDesign', data)
    );
  }

  // exportHtml() {
  //   this.emailEditor?.editor.exportHtml((data:any) =>
  //     console.log('exportHtml', data)
  //   );
  // }

  optionsLoaded() {
    return {
      displayMode: "web",
      contentWidth: "700px",
      backgroundColor: "#ffffff"
    };
  }
  tools() {
    return {};
  }

  exportHtml() {
    this.emailEditor?.editor.exportHtml(
      function (data:any) {
        var json = data.design;
        var html = data.html;
        console.log(json);
        console.log(html);
      },
      {
        cleanup: true
      }
    );
  }
  
  loadOptions() {
    return {
      mergeTags: {
        first_name: {
          name: "First Name",
          value: "{{first_name}}",
          sample: "John"
        },
        last_name: {
          name: "Last Name",
          value: "{{last_name}}",
          sample: "Doe"
        }
      },
      features: {
        stockImages: {
          enabled: false
        },
        undoRedo: false,
        textEditor: {
          cleanPaste: false
        }
      }
    };
  }
  appearance() {
    return {
      // theme: "dark",
      panels: {
        tools: {
          dock: "right"
        }
      }
    };
  }
}
