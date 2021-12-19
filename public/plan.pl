test(Plan) :- solve(
        [sokoban(s(0),s(0)), storage(s(0),s(0)), free(s(s(0)),s(0)), free(s(s(s(0))),s(0)), free(s(s(s(s(0)))),s(0)), crate(s(0),s(s(0)),0), crate(s(s(0)),s(s(0)),s(0)), crate(s(s(s(0))),s(s(0)),s(s(0))), storage(s(s(s(s(0)))),s(s(0))), free(s(s(s(s(0)))),s(s(0))), storage(s(0),s(s(s(0)))), free(s(0),s(s(s(0)))), free(s(s(0)),s(s(s(0)))), free(s(s(s(0))),s(s(s(0)))), free(s(s(s(s(0)))),s(s(s(0))))],	
     	 [safe(0), safe(s(0)), safe(s(s(0)))],
		 [], s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(0))))))))))))))), Plan).
opn(
        move_down,
        [sokoban(X,Y), free(X,s(Y))],
     	[free(X,Y), sokoban(X,s(Y))],
     	[sokoban(X,Y), free(X,s(Y))]).
opn(
        move_up,
        [sokoban(X,s(Y)), free(X,Y)],
     	[free(X,s(Y)), sokoban(X,Y)],
     	[sokoban(X,s(Y)), free(X,Y)]).
opn(
        move_right,
        [sokoban(X,Y), free(s(X),Y)],
     	[free(X,Y), sokoban(s(X),Y)],
     	[sokoban(X,Y), free(s(X),Y)]).
opn(
        move_left,
        [sokoban(s(X),Y), free(X,Y)],
     	[free(s(X),Y), sokoban(X,Y)],
     	[sokoban(s(X),Y), free(X,Y)]).
opn(
        safe_down_storage,
        [sokoban(X,Y), crate_x(X,s(Y),C), free(X,s(s(Y))), storage(X,s(s(Y)))],
     	[free(X,Y), sokoban(X,s(Y)), crate_x(X,s(s(Y)),C)],
     	[sokoban(X,Y), crate_x(X,s(Y),C), free(X,s(s(Y)))]).
opn(
        safe_up_storage,
        [sokoban(X,s(s(Y))), crate_x(X,s(Y),C), free(X,Y), storage(X,Y)],
     	[free(X,s(s(Y))), sokoban(X,s(Y)), crate_x(X,Y,C)],
     	[sokoban(X,s(s(Y))), crate_x(X,s(Y),C), free(X,Y)]).
opn(
        safe_right_storage,
        [sokoban(X,Y), crate_x(s(X),Y,C), free(s(s(X)),Y), storage(s(s(X)),Y)],
     	[free(X,Y), sokoban(s(X),Y), crate_x(s(s(X)),Y,C)],
     	[sokoban(X,Y), crate_x(s(X),Y,C), free(s(s(X)),Y)]).
opn(
        safe_left_storage,
        [sokoban(s(s(X)),Y), crate_x(s(X),Y,C), free(X,Y), storage(X,Y)],
     	[free(s(s(X)),Y), sokoban(s(X),Y), crate_x(X,Y,C)],
     	[sokoban(s(s(X)),Y), crate_x(s(X),Y,C), free(X,Y)]).
opn(
        safe_down,
        [sokoban(X,Y), crate(X,s(Y),C), free(X,s(s(Y))), storage(X,s(s(Y)))],
     	[free(X,Y), sokoban(X,s(Y)), crate_x(X,s(s(Y)),C), safe(C)],
     	[sokoban(X,Y), crate(X,s(Y),C), free(X,s(s(Y)))]).
opn(
        safe_up,
        [sokoban(X,s(s(Y))), crate(X,s(Y),C), free(X,Y), storage(X,Y)],
     	[free(X,s(s(Y))), sokoban(X,s(Y)), crate_x(X,Y,C), safe(C)],
     	[sokoban(X,s(s(Y))), crate(X,s(Y),C), free(X,Y)]).
opn(
        safe_right,
        [sokoban(X,Y), crate(s(X),Y,C), free(s(s(X)),Y), storage(s(s(X)),Y)],
     	[free(X,Y), sokoban(s(X),Y), crate_x(s(s(X)),Y,C), safe(C)],
     	[sokoban(X,Y), crate(s(X),Y,C), free(s(s(X)),Y)]).
opn(
        safe_left,
        [sokoban(s(s(X)),Y), crate(s(X),Y,C), free(X,Y), storage(X,Y)],
     	[free(s(s(X)),Y), sokoban(s(X),Y), crate_x(X,Y,C), safe(C)],
     	[sokoban(s(s(X)),Y), crate(s(X),Y,C), free(X,Y)]).
opn(
        push_down_storage,
        [sokoban(X,Y), crate_x(X,s(Y),C), free(X,s(s(Y)))],
     	[free(X,Y), sokoban(X,s(Y)), crate(X,s(s(Y)),C)],
     	[sokoban(X,Y), crate_x(X,s(Y),C), safe(C), free(X,s(s(Y)))]).
opn(
        push_up_storage,
        [sokoban(X,s(s(Y))), crate_x(X,s(Y),C), free(X,Y)],
     	[free(X,s(s(Y))), sokoban(X,s(Y)), crate(X,Y,C)],
     	[sokoban(X,s(s(Y))), crate_x(X,s(Y),C), safe(C), free(X,Y)]).
opn(
        push_right_storage,
        [sokoban(X,Y), crate_x(s(X),Y,C), free(s(s(X)),Y)],
     	[free(X,Y), sokoban(s(X),Y), crate(s(s(X)),Y,C)],
     	[sokoban(X,Y), crate_x(s(X),Y,C), safe(C), free(s(s(X)),Y)]).
opn(
        push_left_storage,
        [sokoban(s(s(X)),Y), crate_x(s(X),Y,C), free(X,Y)],
     	[free(s(s(X)),Y), sokoban(s(X),Y), crate(X,Y,C)],
     	[sokoban(s(s(X)),Y), crate_x(s(X),Y,C), safe(C), free(X,Y)]).
opn(
        push_down,
        [sokoban(X,Y), crate(X,s(Y),C), free(X,s(s(Y)))],
     	[free(X,Y), sokoban(X,s(Y)), crate(X,s(s(Y)),C)],
     	[sokoban(X,Y), crate(X,s(Y),C), free(X,s(s(Y)))]).
opn(
        push_up,
        [sokoban(X,s(s(Y))), crate(X,s(Y),C), free(X,Y)],
     	[free(X,s(s(Y))), sokoban(X,s(Y)), crate(X,Y,C)],
     	[sokoban(X,s(s(Y))), crate(X,s(Y),C), free(X,Y)]).
opn(
        push_right,
        [sokoban(X,Y), crate(s(X),Y,C), free(s(s(X)),Y)],
     	[free(X,Y), sokoban(s(X),Y), crate(s(s(X)),Y,C)],
     	[sokoban(X,Y), crate(s(X),Y,C), free(s(s(X)),Y)]).
opn(
        push_left,
        [sokoban(s(s(X)),Y), crate(s(X),Y,C), free(X,Y)],
     	[free(s(s(X)),Y), sokoban(s(X),Y), crate(X,Y,C)],
     	[sokoban(s(s(X)),Y), crate(s(X),Y,C), free(X,Y)]).
solve(State, Goal, Plan, N, Plan) :- is_subset(Goal,State).

solve(State, Goal, Sofar, s(N), Plan) :-
	opn(Op, Precons, Add, Delete), 
	is_subset(Precons, State), 
	delete_list(Delete, State, Remainder),
	append(Add, Remainder, NewState), 
	append(Sofar, [Op], NewSofar), 
	solve(NewState, Goal, NewSofar, N, Plan).

is_subset([],_).
is_subset([X|Xs],Ys) :- member(X,Ys), is_subset(Xs,Ys).

delete_list([],Xs,Xs).
delete_list([X|Xs],Ys,Zs) :- delete(Ys,X,As), delete_list(Xs,As,Zs).