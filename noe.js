var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(nom, couleur) {
        this.nom = nom;
        this.couleur = couleur;
        this.photographier();
        this.nourrir();
    }
    Animal.prototype.photographier = function () {
        console.log(this.nom + " Vous pouvez le prendre en photo");
    };
    Animal.prototype.nourrir = function () {
        if (this.couleur === "noir")
            console.log(this.nom + " mange");
    };
    return Animal;
}());
var Mammifere = /** @class */ (function (_super) {
    __extends(Mammifere, _super);
    function Mammifere(nom, couleur, race) {
        var _this = _super.call(this, nom, couleur) || this;
        _this.race = race;
        _this.pattes = 4;
        return _this;
    }
    return Mammifere;
}(Animal));
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    function Chat(nom, couleur, race) {
        var _this = _super.call(this, nom, couleur, race) || this;
        _this.miauler();
        return _this;
    }
    Chat.prototype.miauler = function () {
        console.log(this.nom + " miaule");
    };
    return Chat;
}(Mammifere));
var Chien = /** @class */ (function (_super) {
    __extends(Chien, _super);
    function Chien(nom, couleur, race) {
        var _this = _super.call(this, nom, couleur, race) || this;
        _this.abboyer();
        return _this;
    }
    Chien.prototype.abboyer = function () {
        console.log(this.nom + " aboie");
    };
    return Chien;
}(Mammifere));
var Poisson = /** @class */ (function (_super) {
    __extends(Poisson, _super);
    function Poisson(nom, couleur) {
        var _this = _super.call(this, nom, couleur) || this;
        _this.nager();
        return _this;
    }
    Poisson.prototype.nager = function () {
        console.log(this.nom + " nage");
    };
    return Poisson;
}(Animal));
var Oiseau = /** @class */ (function (_super) {
    __extends(Oiseau, _super);
    function Oiseau(nom, couleur) {
        var _this = _super.call(this, nom, couleur) || this;
        _this.voler();
        return _this;
    }
    Oiseau.prototype.voler = function () {
        console.log(this.nom + " chante");
    };
    return Oiseau;
}(Animal));
var bx = new Chat("Bx", "noir", "européen");
var nicolas = new Chat("Nicolas", "roux", "chartreux");
var antoine = new Chien("Antoine", "noir", "terre-neuve");
var brandon = new Chien("Brandon", "marron", "moon moon");
var yorann = new Oiseau("Yorann", "multicolor");
var loup12k = new Oiseau("Loup12k", "noir");
var magicarpe = new Poisson("Magicarpe", "gris");
var willy = new Poisson("Willy", "bleu");
var chenipan = new Animal("Chenipan", "vert");
