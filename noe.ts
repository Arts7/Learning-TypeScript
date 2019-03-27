class Animal {
    nom :string;
    couleur :string;
    
    constructor(nom :string, couleur :string) {
        this.nom = nom;
        this.couleur = couleur;
        this.photographier();
        this.nourrir();
    }
    photographier() :void {
        console.log(this.nom + " Vous pouvez le prendre en photo");
    }
    nourrir() :void {
        if(this.couleur === "noir")
            console.log(this.nom + " mange");
    }
}
class Mammifere extends Animal {
    race :string;
    pattes :number;

    constructor(nom :string, couleur :string, race :string) {
        super(nom, couleur);
        this.race = race;
        this.pattes = 4;
    }
}
class Chat extends Mammifere {
    constructor(nom :string, couleur :string, race :string) {
        super(nom, couleur, race); 
        this.miauler();
    }
   
    miauler() {
        console.log(this.nom + " miaule");
    }
}
class Chien extends Mammifere {
    constructor(nom :string, couleur :string, race :string) {
        super(nom, couleur, race); 
        this.abboyer();
    }

    abboyer() :void {
        console.log(this.nom + " aboie");
    }
}
class Poisson extends Animal {
    constructor(nom :string, couleur :string) {
        super(nom, couleur); 
        this.nager();
    }

    nager() :void {
        console.log(this.nom + " nage");
    }
}
class Oiseau extends Animal {
    constructor(nom :string, couleur :string) {
        super(nom, couleur); 
        this.voler();
    }

    voler() :void {
        console.log(this.nom + " chante");
    }
}


var bx = new Chat("Bx", "noir", "européen");
var nicolas = new Chat("Nicolas", "roux", "chartreux");
var antoine = new Chien("Antoine", "noir", "terre-neuve");
var brandon = new Chien("Brandon", "marron", "moon moon");
var yorann = new Oiseau("Yorann", "multicolor");
var loup12k = new Oiseau("Loup12k", "noir");
var magicarpe = new Poisson("Magicarpe", "gris")
var willy = new Poisson("Willy", "bleu");
var chenipan = new Animal("Chenipan", "vert");
