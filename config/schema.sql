
create table decks(
	id INTEGER AUTO_INCREMENT NOT NULL,
    format varchar(25) not null,
    deck_name varchar(100) not null,
    season varchar(10) not null,
    createdAt timestamp not null,
    primary key (id)
);

create table results(
	id integer auto_increment not null,
	deck_name varchar(100) not null,
    opp_deck_name varchar(100) not null,
    wins integer,
    losses integer,
    draw boolean default false,
    format varchar(25) not null,
    username varchar(25) not null,
    event_type varchar(10) not null,
    season varchar(10) not null,
    createdAt timestamp not null,
    primary key (id)
);

create table articles(
	id integer auto_increment not null,
    title varchar(100) not null,
    image blob,
    body text not null,
    author varchar(25) not null,
    tags varchar(100),
    createdAt timestamp not null,
    primary key(id)
);

create table gurus(
	id integer auto_increment not null,
    username varchar(25) not null,
    password char(60) not null,
    email varchar(50),
    createdAt timestamp not null,
    primary key (id)
);