/**
 * Created by jeff on 13/02/2017.
 */

function simulateServerEvent(obj) {
   parseMessage(obj);
}

$(document).ready(function () {
    $("#btnCheat-pypassServer").click(function () {
        simulateServerEvent({
            type: "player_join_ack",
            key: -2,
            your_id: 1,
            current_player: 1,
            expects: 4,
            game_start: true
        });
    });

    $("#btnMyTurn").click(function () {
        game.viewController.yourTurn();
    });
});