create database matchup_guru;

use matchup_guru;

create table decks(
	id INTEGER AUTO_INCREMENT NOT NULL,
    format_name varchar(25),
    deck_name varchar(100),
    season varchar(10),
    primary key (id)
);

create table results(
	id integer auto_increment not null,
	deck_name varchar(100),
    opp_deck_name varchar(100),
    wins integer,
    losses integer,
    draw boolean default false,
    format_name varchar(25),
    username varchar(25),
    event_type varchar(10),
    season varchar(10),
    primary key (id)
);

create table articles(
	id integer auto_increment not null,
    title varchar(255),
    image blob,
    body text,
    author varchar(25),
    tags varchar(100),
    primary key(id)
);

create table gurus(
	id integer auto_increment not null,
    username varchar(25),
    password char(60),
    email varchar(50),
    primary key (id)
);