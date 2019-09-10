# Altcoin-RPC-Calls
Node.JS script that allows for making RPC calls to virtually any Bitcoin derivative altcoin. Perfect for creating explorers, and implementing cryptocurrency payments in to nodejs applications

Requirements:
Node.js >= v8.0
request - npm i request


API Calls
placed in "method": "CALL HERE"
 
== Addressindex ==
getaddressbalance
getaddressdeltas
getaddressmempool
getaddresstxids
getaddressutxos

== Blockchain ==
getbestblockhash
getblock "blockhash" ( verbose )
getblockchaininfo
getblockcount
getblockhash height
getblockhashes timestamp
getblockheader "hash" ( verbose )
getblockheaders "hash" ( count verbose )
getchaintips ( count branchlen )
getdifficulty
getmempoolancestors txid (verbose)
getmempooldescendants txid (verbose)
getmempoolentry txid
getmempoolinfo
getrawmempool ( verbose )
getspentinfo
gettxout "txid" n ( include_mempool )
gettxoutproof ["txid",...] ( blockhash )
gettxoutsetinfo
preciousblock "blockhash"
pruneblockchain
verifychain ( checklevel nblocks )
verifytxoutproof "proof"

== Control ==
debug ( 0|1|addrman|alert|bench|coindb|db|lock|rand|rpc|selectcoins|mempool|mempoolrej|net|proxy|prune|http|libevent|tor|zmq|stash|privatesend|instantsend|masternode|spork|keepass|mnpayments|gobject )
getinfo
getmemoryinfo
help ( "command" )
stop

== Generating ==
generate nblocks ( maxtries )
generatetoaddress nblocks address (maxtries)

== Mining ==
getblocktemplate ( TemplateRequest )
getmininginfo
getnetworkhashps ( nblocks height )
prioritisetransaction <txid> <priority delta> <fee delta>
submitblock "hexdata" ( "jsonparametersobject" )

== Network ==
addnode "node" "add|remove|onetry"
clearbanned
disconnectnode "address" 
getaddednodeinfo ( "node" )
getconnectioncount
getnettotals
getnetworkinfo
getpeerinfo
listbanned
ping
setban "subnet" "add|remove" (bantime) (absolute)
setnetworkactive true|false

== Rawtransactions ==
createrawtransaction [{"txid":"id","vout":n},...] {"address":amount,"data":"hex",...} ( locktime )
decoderawtransaction "hexstring"
decodescript "hexstring"
fundrawtransaction "hexstring" ( options )
getrawtransaction "txid" ( verbose )
sendrawtransaction "hexstring" ( allowhighfees instantsend bypasslimits)
signrawtransaction "hexstring" ( [{"txid":"id","vout":n,"scriptPubKey":"hex","redeemScript":"hex"},...] ["privatekey1",...] sighashtype )

== Stash ==
getgovernanceinfo
getpoolinfo
getsuperblockbudget index
gobject "command"...
masternode "command"...
masternodebroadcast "command"...
masternodelist ( "mode" "filter" )
mnsync [status|next|reset]
privatesend "command"
sentinelping version
spork "command"
voteraw <masternode-tx-hash> <masternode-tx-index> <governance-hash> <vote-signal> [yes|no|abstain] <time> <vote-sig>

== Util ==
createmultisig nrequired ["key",...]
estimatefee nblocks
estimatepriority nblocks
estimatesmartfee nblocks
estimatesmartpriority nblocks
signmessagewithprivkey "privkey" "message"
validateaddress "address"
verifymessage "address" "signature" "message"
z_validateaddress "zaddr"

== Wallet ==
abandontransaction "txid"
addmultisigaddress nrequired ["key",...] ( "account" )
backupwallet "destination"
dumphdinfo
dumpprivkey "address"
dumpwallet "filename"
encryptwallet "passphrase"
getaccount "address"
getaccountaddress "account"
getaddressesbyaccount "account"
getbalance ( "account" minconf addlockconf include_watchonly )
getnewaddress ( "account" )
getrawchangeaddress
getreceivedbyaccount "account" ( minconf addlockconf )
getreceivedbyaddress "address" ( minconf addlockconf )
gettransaction "txid" ( include_watchonly )
getunconfirmedbalance
getwalletinfo
importaddress "address" ( "label" rescan p2sh )
importelectrumwallet "filename" index
importmulti "requests" "options"
importprivkey "stashprivkey" ( "label" ) ( rescan )
importprunedfunds
importpubkey "pubkey" ( "label" rescan )
importwallet "filename"
instantsendtoaddress "address" amount ( "comment" "comment-to" subtractfeefromamount )
keepass <genkey|init|setpassphrase>
keypoolrefill ( newsize )
listaccounts ( minconf addlockconf include_watchonly)
listaddressbalances ( minamount )
listaddressgroupings
listlockunspent
listreceivedbyaccount ( minconf addlockconf include_empty include_watchonly)
listreceivedbyaddress ( minconf addlockconf include_empty include_watchonly)
listsinceblock ( "blockhash" target_confirmations include_watchonly)
listtransactions ( "account" count skip include_watchonly)
listunspent ( minconf maxconf  ["addresses",...] [include_unsafe] )
lockunspent unlock ([{"txid":"txid","vout":n},...])
move "fromaccount" "toaccount" amount ( minconf "comment" )
removeprunedfunds "txid"
sendfrom "fromaccount" "toaddress" amount ( minconf addlockconf "comment" "comment_to" )
sendmany "fromaccount" {"address":amount,...} ( minconf addlockconf "comment" ["address",...] subtractfeefromamount use_is use_ps )
sendtoaddress "address" amount ( "comment" "comment_to" subtractfeefromamount use_is use_ps )
setaccount "address" "account"
settxfee amount
signmessage "address" "message"
z_exportkey "zaddr"
z_exportviewingkey "zaddr"
z_exportwallet "filename"
z_getbalance "address" ( minconf )
z_getnewaddress
z_getoperationresult (["operationid", ... ]) 
z_getoperationstatus (["operationid", ... ]) 
z_gettotalbalance ( minconf includeWatchonly )
z_importkey "zkey" ( rescan startHeight )
z_importviewingkey "vkey" ( rescan startHeight )
z_importwallet "filename"
z_listaddresses ( includeWatchonly )
z_listbalances (minconf)
z_listoperationids
z_listreceivedbyaddress "address" ( minconf )
z_sendmany "fromaddress" [{"address":... ,"amount":...},...] ( minconf ) ( fee )
z_shieldcoinbase "fromaddress" "tozaddress" ( fee ) ( limit )
zcrawjoinsplit rawtx inputs outputs vpub_old vpub_new
zcrawkeygen
zcrawreceive zcsecretkey encryptednote
zcsamplejoinsplit
