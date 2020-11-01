package com.lumar.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Entity
@Table(name="wings")
public class Wings {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
 private int id;
	@Column
 private int pieces;
	
 private String flavor;
	@Column
	private double price;
}
