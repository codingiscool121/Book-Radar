  
class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('SUBMIT');
      this.greeting = createElement('h2');
      this.title = createElement('h1');
      this.greeting1 = createElement('h2');
      this.greeting2 = createElement('h2');
      this.bname = createElement('h4');
      this.sname = createElement('h4');
      this.pname = createElement('h4');
      this.aname = createElement('h4');
      this.bname1 = createElement('h4');
      this.sname1 = createElement('h4');
      this.pname1 = createElement('h4');
      this.aname1 = createElement('h4');
      this.heading =createElement('h3');
      this.sub =createElement('h3');
      this.caption =createElement('h4');

    }

    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
  
    }
  
    display(){
      this.title.html("Welcome to Book Radar.");
      this.title.position(280, 10);
  
      this.input.position(290 ,100);
      this.button.position(340, 135);
     
  
      this.button.mousePressed(()=>{
        this.greeting.html("Please Make your first entry.");
        this.greeting.position(260, 70);
        this.record = createButton('Add');
        this.record.position(370,135);
        this.input.hide();
        this.button.hide();

        this.record.mousePressed(()=>{
          this.record.hide();
          this.greeting.hide();
          this.heading.html("Record 1");
          this.heading.position(270,70);
          
          this.bname.html("Book Name");
          this.bname.position(150,120);
          this.book = createInput("Book's Name");
          this.book.position(250, 140);

          this.aname.html("Author's Name");
          this.aname.position(130,160);
          this.author= createInput("Author's name");
          this.author.position(250, 180);

          this.pname.html("Total Pages");
          this.pname.position(150,200);
          this.page = createInput("Total Pages");
          this.page.position(250, 220);
          
          this.sname.html("Shelf Number.");
          this.sname.position(170,240);
          this.shelf = createInput("Shelf number.");
          this.shelf.position(250, 260);

          this.save = createButton('Save');
          this.save.position(250, 350);


          this.save.mousePressed(()=>{
            this.book.hide();
            this.author.hide();
            this.page.hide();
            this.shelf.hide();
            this.bname.hide();
            this.pname.hide();
            this.sname.hide();
            this.aname.hide();
            this.heading.hide();

            this.save.hide();
            this.greeting1.html("Your record was successfully added to our database.");
            this.greeting1.position(280,90);

            this.add = createButton('+');
            this.add.position(360,180);

            this.caption.html("For adding more records");
            this.caption.position(300,180);

            this.add.mousePressed(()=>{

              this.sub.html("Record II");
              this.sub.position(270,70);

              this.bname1.html("Book Name");
              this.bname1.position(150,120);
              this.book = createInput("Book's Name");
              this.book.position(250, 140);

              this.aname1.html("Author's Name");
              this.aname1.position(130,160);
              this.author= createInput("Author's name");
              this.author.position(250, 180);

              this.pname1.html("Total Pages");
              this.pname1.position(150,200);
              this.page = createInput("Total Pages");
              this.page.position(250, 220);
          
              this.sname1.html("Shelf No.");
              this.sname1.position(170,240);
              this.shelf = createInput("Shelf no.");
              this.shelf.position(250, 260);
            
              this.add.hide();
              this.greeting1.hide();
              this.caption.hide();

              this.save1 = createButton('Save');
              this.save1.position(250, 350);    

              this.save1.mousePressed(()=>{
              this.greeting2.html("Your record was successfully added to our database.");
              this.greeting2.position(280,90);
              
              this.book.hide();
              this.author.hide();
              this.page.hide();
              this.shelf.hide();
              this.bname1.hide();
              this.pname1.hide();
              this.sname1.hide();
              this.aname1.hide();
              this.save1.hide();
              this.sub.hide();

              });

            });

          });

        });
        
      });
  
     
  
    }
  }