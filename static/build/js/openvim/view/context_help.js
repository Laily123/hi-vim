function create_VIM_CONTEXT_HELP(e){function n(e,n,t){var o=$("<p />",{class:"commandhelp"}),r=$("<span />",{class:"command_keycombination",text:e}),a=$("<span />",{class:"command_description",text:n});return o.append(r).append(a),t?o.addClass("helpkey_"+t).addClass("conditional"):o}function t(e,t,o,r){n(t,o,r).appendTo(e)}function o(n,o,r){var a=$(".command-mode",e);t(a,n,I18n.getValue(o),r)}function r(){var n=$(".insert-mode",e);t(n,"Esc",I18n.getValue("change to normal mode")),o("i, I","change to insert mode"),o("h, j, k, l","move left, down, up, right"),o("w, b, e, ge","move word at a time"),o("[n][action/movement]","do n times, e.g. 3w"),o("x, X","remove a character"),o("a, A","append"),o("f[char]","move to next given char in line"),o("F[char]","move to previous char in line"),o("; and ,","repeat last f or F"),o("f[char]","move to n:th next given char in line","number_f_char"),o("/yourtext and then: n, N","Search text"),o("d[movement]","delete by giving movement"),o("r[char]","replaces character below cursor"),o("0, $","move to start/end of line"),o("o, O","add new line"),o("%","Goto corresponding parentheses"),o("ci[movement]","change inside of given movement"),o("D","delete to end of line"),o("S","clear current line; to insert mode"),o("g","move to the start of buffer","g"),o("e","move to end of previous word","ge"),o("gg / G","move to start / end of buffer"),o("G or [number]G","move to line","goto_line_g"),o("d","the whole line","dd"),o("$","the rest of the line","end_of_line"),o("0","the beginning of line to here","start_of_line"),o("w","to the beginning of next word","w"),o("e","to the end of current word","e"),o("b","to the beginning of current word","b"),o("h, j, k, l","left, down, up, right","hjkl"),o("[n][movement]","movement n times","num_movement"),o("[char]","single character","char"),o("[movement]","movement, e.g. j","movement"),o("yy","copy current line"),o("y","copy current line","copy_line"),o("p","Paste copied text after cursor."),o("i[YourText]","Repeats inserted text","repeat_insert"),o("ESC","cancel action/movement","chained"),c()}function a(n,t){$(".commandhelp",e).hide(),m.for_each(n,function(n){$(".commandhelp.helpkey_"+n,e).show()}),i(t)}function i(n){var t="";m.for_each(n,function(e){t+=e+" "}),t=$.trim(t),$(".context_pressed",e).text(t)}function c(){$(".context_pressed",e).text(""),$(".commandhelp",e).show(),$(".commandhelp.conditional",e).hide()}var m=VIM_GENERIC;return{initialize:r,show_help:c,set_help:a}}