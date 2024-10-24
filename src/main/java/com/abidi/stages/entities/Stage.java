package com.abidi.stages.entities;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Stage {
	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private String titre;


	    private Date dateDebut;
	    
	    private Date dateFin; 

	    private String entreprise;

	    @ManyToOne
	    @JoinColumn(name = "type_id")
	    private Type type;

	   
	    public Stage() {}

	    public Stage(String titre, Date dateDebut, Date dateFin, String entreprise, Type type) {
	        this.titre = titre;
	        this.dateDebut = dateDebut;
	        this.dateFin = dateFin;
	        this.entreprise = entreprise;
	        this.type = type;
	    }

	 
	    public Long getId() {
	        return id;
	    }

	    public void setId(Long id) {
	        this.id = id;
	    }

	    public String getTitre() {
	        return titre;
	    }

	    public void setTitre(String titre) {
	        this.titre = titre;
	    }

	    public Date getDateDebut() {
	        return dateDebut;
	    }

	    public void setDateDebut(Date dateDebut) {
	        this.dateDebut = dateDebut;
	    }

	    public String getEntreprise() {
	        return entreprise;
	    }

	    public void setEntreprise(String entreprise) {
	        this.entreprise = entreprise;
	    }

	    public Type getType() {
	        return type;
	    }

	    public void setType(Type type) {
	        this.type = type;
	    }

	@Override
	public String toString() {
		return "Stage{" +
				"id=" + id +
				", titreStage='" + titre + '\'' +
				", dateDebut=" + dateDebut +
				", dateFin=" + dateFin +
				", entreprise='" + entreprise + '\'' +
				", type=" + type +
				'}';
	}


}
