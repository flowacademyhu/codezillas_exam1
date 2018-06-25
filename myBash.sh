#!/bin/bash

function exam1 {
	mkdir $1;
	touch $1/run.sh;
	touch $1/lib.so;
	chmod ugo+x $1/run.sh;
	ln -s $1/run.sh $1/go.sh;
}

exam1 $1;
