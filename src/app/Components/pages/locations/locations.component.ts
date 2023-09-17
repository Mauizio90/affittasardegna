import { Component, ElementRef, ViewChild } from '@angular/core';
import { AccommodationService } from '../../services/accommodation.service';
import { Accommodation } from '../../models/accommodation';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


@Component({
    selector: 'app-locations',
    templateUrl: './locations.component.html',
    styleUrls: ['./locations.component.css'],
    standalone: true,
    imports: [NgFor, RouterLink, TranslateModule, CommonModule]
})
export class LocationsComponent {
  public allAccommodations?: Accommodation[];
  public selectableCities: { id: number, name: string, accommodationsCount: number, descriptionIta: string, descriptionEng: string, image: string }[] = [
    { id: 1, name: "Aglientu", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: "" },
    { id: 2, name: "Alghero", accommodationsCount: 0, descriptionIta: "Perla della “Riviera del Corallo”, ricca di testimonianze del suo passato catalano (tra cui la lingua che ancora vi si parla), ha un vivacissimo porto turistico e commerciale, attrezzato per le attività di diporto. Famosa per l’aragosta che si pesca nelle acque cristalline del suo golfo, per la produzione di gioielli e manufatti di corallo e per il suo incantevole centro storico, le cui viuzze di notte si animano di una vivace <i>movida</i>.</p> <p>A pochi Km da Alghero, la Baia di Conte è il porto naturale più grande del Mediterraneo, utilizzato per questo sin dall’epoca romana; oggi è soprattutto una località turistica, molto amata da chi pratica sport acquatici e immersioni. A Nord la Baia è delimitata dalla scogliera di Capo Caccia, promontorio calcareo di altissime rocce a strapiombo sul mare, che va dai 170 m del capo agli oltre 300 di P. Cristallo, ricoperto dalla macchia mediterranea e da esemplari di flora rara come la palma nana, ove nidificano e si riproducono grifoni, falchi e gabbiani. Sul versante del promontorio rivolto verso il mare aperto, davanti ad una pittoresca isoletta detta “Foradada”, si aprono le famose Grotte di Nettuno cui si può arrivare in barca o, per i più coraggiosi, per mezzo dei 656 scalini della “Scala del Capriolo”, scavata lungo costone roccioso, con viste mozzafiato.</p> <p><b>Da non perdere</b>: un bagno alle Bombarde.</p> <p><b>Principali distanze</b>: <u>Porto Torres</u>, 40 Km; <u>Stintino</u>, 60 km; Sassari, 35 Km; <u>Bosa</u>, 50 Km.</p> <p><b>Come arrivare</b>: via mare, a <u>Porto Torres</u> (distanza 40 Km), collegata con Genova, Civitavecchia e Marsiglia (compagnie di navigazione: Tirrenia, Moby Lines, Grandi Navi Veloci ,Grimaldi); in aereo, l’aeroporto di Fertilia (distanza 5 km) è scalo delle principali compagnie di volo nazionali ed estere.</p> <p><b>Le spiagge</b>: il suo litorale è ampiamente balneabile e ricchissimo di calette e spiagge. Tra le principali: il Lido, spiaggia a fondo sabbioso e fondali bassi, lunga alcuni Km; Le Bombarde e il Lazzaretto, a fondo sabbioso con rocce affiorati; nella Baia di Conte: <u>Porto Conte</u> e Mugoni, a fondo sabbioso, avvolte da un’ampia pineta, Spiaggia di Tramariglio, Cala Dragunara (da cui partono barconi per le Grotte di Nettuno), Belvedere Foradada (scogliera a picco sul mare); risalendo verso nord: Cala del Porticciolo, Baia di Porto Ferro, Cala dell’Argentiera (calette sabbiose che si aprono tra alte scogliere).</p> </p>", descriptionEng: "<p>Pearl of the \"Coral Riviera,\" rich in traces of its Catalan past (including the language still spoken there), it has a lively tourist and commercial port, equipped for recreational activities. Famous for the lobster caught in the crystal-clear waters of its gulf, for the production of coral jewelry and artifacts, and for its enchanting historic center, where narrow streets come alive with vibrant <i>movida</i> at night.</p> <p>A few kilometers from Alghero, the Bay of Conte is the largest natural harbor in the Mediterranean, used for this purpose since Roman times; today, it is primarily a tourist destination, much loved by water sports enthusiasts and divers. To the north, the bay is delimited by the cliffs of Capo Caccia, a limestone promontory with high cliffs plunging into the sea, ranging from 170 meters at the cape to over 300 meters at P. Cristallo, covered in Mediterranean vegetation and home to rare flora such as the dwarf palm, where griffon vultures, falcons, and seagulls nest and reproduce. On the side of the promontory facing the open sea, in front of a picturesque islet called \"Foradada,\" you will find the famous Neptune's Caves, which can be reached by boat or, for the more adventurous, by climbing the 656 steps of the \"Scala del Capriolo,\" carved along the rocky ridge, offering breathtaking views.</p> <p><b>Not to be missed</b>: a swim at Bombarde Beach.</p> <p><b>Main distances</b>: <u>Porto Torres</u>, 40 km; <u>Stintino</u>, 60 km; Sassari, 35 km; <u>Bosa</u>, 50 km.</p> <p><b>How to get there</b>: by sea, to <u>Porto Torres</u> (40 km away), connected to Genoa, Civitavecchia, and Marseille (shipping companies: Tirrenia, Moby Lines, Grandi Navi Veloci, Grimaldi); by air, Fertilia Airport (5 km away) is a stopover for major national and international airlines.</p> <p><b>The beaches</b>: its coastline is highly suitable for swimming and rich in coves and beaches. Among the main ones: Lido Beach, with sandy bottom and shallow waters, extending for several kilometers; Le Bombarde and Lazzaretto, with sandy bottom and protruding rocks; in the Bay of Conte: <u>Porto Conte</u> and Mugoni, with sandy bottom, surrounded by a large pine forest, Tramariglio Beach, Cala Dragunara (from which boats depart for Neptune's Caves), Belvedere Foradada (cliffs overlooking the sea); heading north: Cala del Porticciolo, Bay of Porto Ferro, Cala dell'Argentiera (sandy coves opening between high cliffs).</p>", image: "./assets/images/26Copia.jpg"  },
    { id: 3, name: "Badesi", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 4, name: "Baja Sardinia", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: "" },
    { id: 5, name: "Bosa", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 6, name: "Budoni", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 7, name: "Cala Gonone", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 8, name: "Cannigione", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 9, name: "Castelsardo", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 10, name: "Costa Paradiso", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 11, name: "Golfo Aranci", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 12, name: "Isola La Maddalena", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 13, name: "Lido del Sole", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 14, name: "Limpiddu", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 15, name: "Loiri Porto San Paolo", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 16, name: "Marina di Sorso", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 17, name: "Orosei", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 18, name: "Palau", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 19, name: "Pittulongu", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 20, name: "Porto Cervo", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 21, name: "Porto Istana", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 22, name: "Porto Rotondo", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 23, name: "Porto Taverna", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 24, name: "Porto Torres", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 25, name: "Portobello di Gallura", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 26, name: "Posada", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 27, name: "San Giovanniu di Posada", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 28, name: "San Teodoro", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 29, name: "Santa Teresa di Gallura", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 30, name: "Siniscola", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 31, name: "Stintino", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 32, name: "Trinità D\"agultu - Isola Rossa", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 33, name: "Valledoria", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
    { id: 34, name: "Viddalba", accommodationsCount: 0, descriptionIta: "", descriptionEng: "", image: ""  },
];



  constructor(private accommodationService: AccommodationService, private titleService: Title, private metaTagService: Meta) {
    this.titleService.setTitle("AffittaSardegna - Le migliori località turistiche della Sardegna");
    this.metaTagService.updateTag({ name: 'description', content: 'Tutte le migliori località turistiche della Sardegna, spiagge in Sardegna, spiaggia di Stintino, spiaggia di Cala Gonone, spiaggia Costa Smeralda' });
    this.accommodationService.getAccommodations().subscribe((data) => {
      this.allAccommodations = data;
      this.updateAccommodationsCount();      
    });
  }

  updateAccommodationsCount() {
    this.selectableCities.forEach((city) => {
      city.accommodationsCount = this.allAccommodations?.filter((accommodation) => accommodation.city === city.name).length || 0;
    });
  }

}
