import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './app.html';
console.log('here');

Template.formulaire_saisie_utilisateur.events({
	"submit form": function(event, template){
		var nom = template.$(".form-control").val();
		console.log(nom + " est ajouter");
		event.preventDefault();
	}
})

Template.formulaire_creation_projet.events({
	"submit form": function(event, template){
		var nom = template.$(".form-control").val();
		console.log('Vous avez crée : ' + nom);
		event.preventDefault();
	}
})

Template.formulaire_saisie_depense.events({
	"submit form": function(event, template){
		var nom = template.$('.form-control').val();
		var prix = template.$('.price').val();
		var personne = template.$('.name-select').val();
		console.log(personne + " à dépenser " + prix + " pour "+ nom  );
		event.preventDefault();
	}
})