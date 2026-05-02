🧠 Objašnjenje šljake:

ID Mapping(Supabase -> KV):

Inicijalizacija: Jednom u 24 sata Worker povuče sve bitne ID - jeve iz Supabase - a i osvježi KV.To ti troši samo 1 upis.

    Batching: Kada sustav tijekom dana kreira nove entitete, ne piše u KV odmah(da ne troši limite).Čeka da se skupi 100 novih ID - jeva ili da prođe 30 minuta.Što god se dogodi prije, okida sinkronizaciju.

Delta Interval:

Postavljen na 2 sekunde.To je tvoj ritam "otkucaja srca".Svake 2 sekunde sustav gleda bazu i pita: "Ima li što novo od zadnjeg sequenceId-a?".Ako ima, pakira Deltu.

    Cleanup(TTL Brisanje):

ttlCheckIntervalMs od 15 minuta je razuman.Nema potrebe da svake sekunde provjeravaš što treba obrisati.Svakih 15 minuta skripta(vidi / scripts / purge_old_content.ts na svojoj slici) prođe kroz bazu i počisti sve što je starije od definiranog u ttl objektu.
