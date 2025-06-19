import { loadClients } from './clients.mjs';
import { setFooter, setupHamburger } from './utils.mjs';
import { setupServiceDialogs } from './services.mjs';



setFooter();
setupHamburger();
loadClients();
setupServiceDialogs();

