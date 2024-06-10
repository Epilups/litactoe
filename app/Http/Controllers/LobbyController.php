<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Lobby;


class LobbyController extends Controller
{
    public function createLobby(Request $request)
    {
        $lobbyId = Str::uuid()->toString();

        $lobby = new Lobby();
        $lobby->lobby_id = $lobbyId;
        $lobby->save();

        return response()->json(['lobbyId' => $lobbyId], 201);
    }

    public function validateLobby($lobbyId)
    {

        $exists = Lobby::where('lobby_id', $lobbyId)->exists();
        return response()->json(['exists' => $exists]);
    }
}
