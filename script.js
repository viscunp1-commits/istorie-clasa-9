const listaTeme = document.getElementById("listaTeme");
const continutLectie = document.getElementById("continutLectie");

const cheiLectii = Object.keys(lectii);
let lectieCurenta = -1; // -1 pentru pagina de bun venit (Home)

// Toate noțiunile și personalitățile extrase exact din fișier, propoziție cu propoziție
const glosarExamen = {
    notiumni: {
        "Autonomie": "dreptul unui stat, unei minorități sau naționalități de a se administra singură, fără intervenția puterii centrale.",
        "Cenzură": "control exercitat de stat asupra conținutului publicațiilor, spectacolelor, radioteleviziunii și, uneori, corespondenței.",
        "Colectivizare": "trecerea forțată a mijloacelor de producție în proprietate colectivă, prin naționalizare și confiscare, însoțită de violență și deportări.",
        "Comunism": "ideologie ce promovează o societate fără stat, clase sociale și proprietate privată, cu scopul unei societăți egalitare.",
        "Constituţie": "act legislativ ce definește drepturile cetățenilor și organizarea puterilor legislativă, executivă și judecătorească.",
        "Cortina de fier": "denumire dată împărțirii Europei în Occidentul democratic și Estul controlat de URSS, în timpul Războiului Rece.",
        "Criză economică": "eveniment social de declin economic, manifestat prin stagnare, recesiune și inflație.",
        "Cultul personalității": "exaltarea rolului unei personalități politice în dezvoltarea societății, specifică regimurilor totalitare.",
        "Cultura de masă": "formă de cultură a societății contemporane de consum, în care relațiile dintre oameni sunt guvernate de procese economice.",
        "Democraţie": "regim politic bazat pe voința poporului, votul universal și suveranitatea națiunii.",
        "Dictatură": "regim politic în care puterea nu poate fi controlată de societate, fiind impusă forțat de o persoană, un partid sau un grup.",
        "Fascism": "ideologie totalitaristă opusă comunismului și democrației, apărută în Italia după Primul Război Mondial, bazată pe naționalism extremist și violență.",
        "Ideologie": "totalitatea ideilor și concepțiilor ce constituie partea teoretică a unui sistem.",
        "Liga Națiunilor": "organizație internațională înființată în iunie 1919, în urma Tratatului de la Versailles.",
        "Miracol economic": "perioadă de dezvoltare economică rapidă și spectaculoasă într-un timp relativ scurt.",
        "Nazism": "ideologie și politică totalitară, naționalistă și rasistă, aplicată de Hitler în Germania între 1933-1945.",
        "Organizația Națiunilor Unite": "cea mai importantă organizație internațională, fondată în 1945, cu misiunea de a asigura pacea mondială și respectarea drepturilor omului.",
        "Pact": "înțelegere scrisă, tratat internațional încheiat, în special, pentru menținerea păcii sau colaborarea semnatarilor.",
        "Patrimoniu": "totalitatea bunurilor materiale și spirituale ce aparțin unui popor.",
        "Politică de conciliere": "politică de împăciuire a agresorului de către alte state, prin cedări teritoriale sau acceptarea condițiilor lui.",
        "Război rece": "confruntarea politică, diplomatică și ideologică dintre URSS și SUA, ce a dominat relațiile Est-Vest peste patru decenii.",
        "Regim democratic": "regim ce se caracterizează prin separarea puterilor, legitimarea prin alegeri libere și respectarea drepturilor cetățenești.",
        "Regim totalitar": "regim ce aplică dictatura unei minorități, prin controlul întregii activități a statului și politică de forță.",
        "Regim autoritar": "regim politic în care drepturile omului nu sunt respectate, iar guvernanții /dictatorii nu pot fi înlăturați prin alegeri libere.",
        "Represiuni": "reprimarea prin violență a opoziției, prin acțiuni drastice precum arestări, torturi, execuții și deportări.",
        "Revizionism": "metodă critică de cercetare, aplicabilă în orice domeniu, prin care teoriile vechi sunt schimbate sau abandonate pe baza noilor dovezi.",
        "Securitate colectivă": "măsuri de apărare comună împotriva unei agresiuni, stabilite în baza unui tratat.",
        "Tratat": "acord în legea internațională, încheiat între două sau mai multe state ori entități internaționale.",
        "Ultimatum": "înștiințare a unui stat către altul, prin care i se atrage atenția că, în cazul unor acte, se vor lua măsuri de constrângere sau se va porni război."
    },
    personalitati: {
        "Ferdinand I (10 octombrie 1914-20 iulie 1927)": "a acceptat, în Consiliul de Coroană din august 1916, intrarea României în Primul Război Mondial de partea Antantei, făcând primul pas spre România Mare. A refuzat să ratifice pacea separată dintre Puterile Centrale și România. A fost regele României întregite, încoronat la 15 octombrie 1922 la Alba Iulia, a sprijinit reformele înfăptuite în țară, fiind un veritabil monarh constituțional.",
        "Carol al II-lea": "- rege al României (8 iunie 1930-6 septembrie 1940). Obiectivul său central a fost creșterea rolului monarhiei în stat; în 1938 a instaurat regimul de dictatură personală. În septembrie 1940, după cedarea Basarabiei, nordului Bucovinei și ținutului Herța (URSS), a Transilvaniei de Nord-Vest (Ungariei) și a Cadrilaterului (Bulgariei), a abdicat în favoarea fiului său Mihai, iar puterile dictatoriale au trecut la generalul Ion Antonescu.",
        "Alexei Mateevici (27 martie 1888-24 august 1917)": "- poet, preot și scriitor basarabean. În 1907 a publicat primele versuri în ziarele „Basarabia” și „Țăranii”, precum și poezia „Eu cânt”, alături de articole despre cântecele populare și obiceiurile din Basarabia. Cunoscut pentru contribuția sa la promovarea identității naționale românești. Este autorul poeziei „Limba noastră”, luptând pentru păstrarea limbii române în contextul politicii de rusificare a Imperiului Rus.",
        "Ion Inculeţ (1884-1940)": "- om politic, fizician, membru titular al Academiei Române. Primul președinte al Sfatului Țării (21 noiembrie 1917-2 aprilie 1918), militant al eliberării naționale și unirii cu România. După unire, a deținut funcții importante: ministru al Basarabiei, ministru al sănătății publice, ministru de interne, ministru al comunicațiilor și vicepreședinte al Consiliului de Miniștri al României.",
        "Nicolae Titulescu (1882-1941)": "- diplomat, jurist și om politic român, una dintre cele mai importante personalități ale diplomației europene din perioada interbelică. A fost ministru de externe al României și de două ori președinte al Societății Națiunilor, unde a susținut pacea, securitatea colectivă și cooperarea între state. A promovat activ politica de alianțe, contribuind la consolidarea poziției internaționale a României. A murit în 1941, în exil, Franța.",
        "Alexandru Plămădeală (1888-1940)": "- sculptor basarabean, director al Școlii Comunale de Desen din Chișinău (azi Colegiul Republican de Arte Plastice ce-i poartă numele), profesor de sculptură, desen și modelaj. Capodopera sa este monumentul lui Ștefan cel Mare și Sfânt (1928, Grădina Publică din Chișinău). A mai realizat portrete ale poetului Ion Minulescu, cântăreței Lidia Lipkovski, pictorului Teodorescu-Sion, lui Alexandru Donici și monumentul regelui Ferdinand I.",
        "Constantin Brâncuși (1876-1957)": "- remarcabil sculptor român, autor a numeroase lucrări: Portretul pictorului Dărăscu, Orgoliu, Supliciu, Rugăciunea, Sărutul, Adam și Eva. În 1918 a sculptat în lemn primele coloane, care au căpătat forma definitivă în 1938: Coloana fără sfârșit / Coloana infinitului, parte a ansamblului de la Târgu Jiu, realizat în memoria soldaților căzuți în Primul Război Mondial.",
        "Maria Cebotari (1910-1949)": "- soprană de renume mondial și actriță de film. A debutat la 15 aprilie 1931 pe scena Operei din Dresda, în rolul Mimi din „Boema” de Puccini. Solistă a Operei din Berlin (1935-1946) și a Operei din Viena (1947-1949); a susținut turnee în Marea Britanie, Franța, Italia, Suedia, Danemarca etc. A interpretat circa 60 de roluri de operă, a cântat operetă și a jucat în filme precum „Fata în Alb” (1934), „Inimi tari” și „Cântec de leagăn” (1937).",
        "Franklin D. Roosevelt": "- al 32-lea președinte al SUA (1933-1945), în funcție 4 mandate consecutive. Inițial adept al neutralității, dar evenimentele din anii '30 și ascensiunea URSS l-au convins să redefinească politica externă pe linia trasată de Wilson. A lansat programul „New Deal”. În al Doilea Război Mondial a participat la Conferințele de la Teheran și Yalta.",
        "Woodrow Wilson": "- președinte al SUA (1913-1921), istoric și politolog. Inițial adept al neutralității SUA în Primul Război Mondial, dar scufundarea vaselor civile americane de submarinele germane l-a determinat să susțină implicarea activă (din martie 1917). A proclamat „Cele 14 puncte” și a devenit vestitorul unei diplomații noi și deschise, a stat la baza fondării Societății Națiunilor. Laureat al Premiului Nobel pentru Pace (1919).",
        "Winston Churchill": "- om politic britanic, prim-ministru al Marii Britanii (1940-1945), a condus țara în lupta împotriva Germaniei naziste în al Doilea Război Mondial. În 1946 a folosit expresia „Cortina de Fier” pentru a descrie împărțirea Europei în două: Europa de Vest democratică și Europa de Est aflată sub influența URSS, marcând începutul Războiului Rece.",
        "Iosif Stalin (1879-1953)": "- bolșevic de origine georgiană. Între 1917 și 1922 a fost comisar pentru naționalități, secretar general al Comitetului Central al Partidului Comunist al bolșevicilor din URSS (1924-1952), apoi al PCUS (1952-1953). A instaurat un regim totalitar în URSS, marcat de foamete organizată, „Marea Teroare” (arestări în masă, deschiaburiri, deportări, exterminarea rivalilor politici). Și a condus Uniunea Sovietică în cel de-al Doilea Război Mondial.",
        "Margaret Thatcher (1925-2013)": "- om politic englez, prim-ministru al Regatului Unit (1979-1990) din partea Partidului Conservator (lider al partidului din 1975), prima femeie aleasă în această funcție. A implementat o politică economico-socială dură, fiind supranumită „Doamna de fier”. Și a dus o politică externă activă.",
        "Nicolae Ceauşescu (1918-1989)": "- dictator român, secretar general al Partidului Comunist Român din 1965, președinte al Republicii Socialiste România din 1974 până la moarte (25 decembrie 1989, în urma Revoluției din 1989 și a condamnării de Tribunalul Militar Excepțional) și s-a remarcat prin cultul personalității.",
        "Mihail Gorbaciov (1931-2022)": "- secretar general al PC al URSS din 1985 și ultimul președinte al URSS. A inițiat perestroika și glasnost, reformele sale au dus la încheierea Războiului Rece, încetarea monopolului politic al PC al URSS și prăbușirea Uniunii Sovietice. În 1990 a primit Premiul Nobel pentru Pace.",
        "Grigore Vieru (1935-2009)": "- poet, scriitor și publicist din Republica Moldova, cunoscut pentru creațiile dedicate limbii române, mamei, copilăriei și identității naționale. A fost o voce importantă a mișcării de renaștere națională din anii '80, susținând revenirea la alfabetul latin și afirmarea valorilor românești. Opera sa a avut impact profund asupra culturii basarabene. A decedat în 2009, în urma unui accident rutier.",
        "Mihai Volontir (1934-2015)": "- actor de teatru și film din Republica Moldova, una dintre cele mai importante personalități ale culturii naționale. A activat la Teatrul Național „Vasile Alecsandri” din Bălți, devenind cunoscut în întreg spațiul sovietic și românesc prin roluri memorabile, cel mai celebru fiind Budulai din filmul „Țiganul”. Și a fost distins cu numeroase premii și titluri onorifice.",
        "Maria Bieșu (1935-2012)": "- soprană, cântăreață de operă și lied din Republica Moldova. În 1965 a avut un stagiu la teatrul La Scala din Milano; în 1967 a obținut titlul „Cea mai bună Cio-Cio-san” la Concursul Internațional „Miuță Tomaki”. A evoluat pe scena Metropolitan Opera din New York, a Teatrului Bolșoi din Moscova, precum și pe scenele operelor din Paris, Sydney, Tokio, Varșovia, Leningrad, Tbilisi, susținând turnee și în Japonia, Australia, Cuba, Israel.",
        "Emil Loteanu (1936-2003)": "- regizor de film, scenarist și poet din Republica Moldova, cunoscut pentru stilul artistic liric și filmele inspirate din cultura și tradițiile romilor. A realizat producții celebre precum „Lăutarii” și „Șatra”, cu succes atât în spațiul sovietic, cât și internațional și a fost o figură importantă a cinematografiei moldovenești.",
        "Dumitru Matcovschi (1939-2013)": "- poet, prozator și dramaturg din Republica Moldova, una dintre figurile importante ale literaturii naționale. A fost redactor-șef al revistei „Nistru” și susținător activ al mișcării de renaștere națională din anii '80, promovând limba română și valorile culturale autentice. Opera sa (poezii, teatru, proză) abordează identitatea națională, istoria și destinul poporului.",
        "Alexandru Moşanu (1932-2017)": "- istoric și politician din Republica Moldova, primul deputat în Parlamentul R. Moldova și primul președinte al Parlamentului după proclamarea independenței. A participat activ la mișcarea de renaștere națională de la sfârșitul anilor '80, având un rol important în afirmarea suveranității și identității naționale a țării, prin activitatea sa politică și academică.",
        "Eugen Doga (1937-2025)": "- compozitor din Republica Moldova, una dintre cele mai importante personalități ale muzicii. Cunoscut pentru valsurile sale celebre și muzica de film, inclusiv pentru filmul „Gingașa și tandra mea fiară”. A avut o contribuție uriașă la cultura națională și internațională."
    }
};

// Afișează temele în meniul din stânga
function afiseazaTeme(){
    listaTeme.innerHTML = "";

    cheiLectii.forEach((id, index) => {
        const lectie = lectii[id];

        const buton = document.createElement("button");
        buton.className = "tema-item" + (index === lectieCurenta ? " activa" : "");
        buton.textContent = lectie.titlu;

        buton.onclick = () => {
            lectieCurenta = index;
            afiseazaTeme();
            deschideLectia(id);
        };

        listaTeme.appendChild(buton);
    });

    // Buton în meniu pentru Noțiuni și Personalități
    if(!document.getElementById("btnGlosar")) {
        const btnGlosar = document.createElement("button");
        btnGlosar.id = "btnGlosar";
        btnGlosar.className = "tema-item";
        btnGlosar.style.marginTop = "15px";
        btnGlosar.style.borderTop = "1px solid #1e2d42";
        btnGlosar.style.paddingTop = "15px";
        btnGlosar.style.color = "#38bdf8";
        btnGlosar.style.fontWeight = "600";
        btnGlosar.textContent = "📚 Noțiuni și Personalități";
        btnGlosar.onclick = () => {
            lectieCurenta = -99;
            afiseazaTeme();
            afiseazaGlosar();
        };
        listaTeme.appendChild(btnGlosar);
    }
}

// Generare HTML test (titlu "Test", fără emoji)
function genereazaHTMLTest(id) {
    const lectie = lectii[id];
    const test = lectie ? lectie.intrebari : null;

    if(!test || test.length === 0){
        return `<div class="sectiune-test"><p>Nu există întrebări pentru această temă.</p></div>`;
    }

    let html = `
    <div class="sectiune-test">
        <h2>Test</h2>
    `;

    test.forEach((q, index) => {
        html += `
        <div class="intrebare" id="intrebare-${index}">
            <h3>${index + 1}. ${q.intrebare}</h3>
        `;

        q.variante.forEach((v, i) => {
            html += `
            <label class="varianta">
                <span class="varianta-icon"></span>
                <input type="radio" name="q${index}" value="${i}">
                <span class="varianta-text">${v}</span>
            </label>
            `;
        });

        html += "</div>";
    });

    html += `</div>`;
    return html;
}

// Deschide lecția selectată
function deschideLectia(id){
    const lectie = lectii[id];

    continutLectie.innerHTML = `
        <div class="lectie-container">
            <div class="lectie-card">
                <h1>${lectie.titlu}</h1>
                ${lectie.continut}
                
                ${genereazaHTMLTest(id)}

                <div class="optiuni-navigare">
                    <button class="btn-urmatoarea" onclick="temaUrmatoare()">➡️ Tema următoare</button>
                </div>
            </div>
        </div>
    `;

    // Atașează evenimentele pentru verificare
    const test = lectie.intrebari;
    if(test) {
        document.querySelectorAll(".intrebare").forEach((intrebareDiv, index) => {
            const inputuri = intrebareDiv.querySelectorAll('input[type="radio"]');
            inputuri.forEach((input) => {
                input.addEventListener("change", function(){
                    marcheazaIntrebare(test[index], intrebareDiv, this);
                });
            });
        });
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Pagina specială pentru Noțiuni și Personalități (titlurile centrate, textele aliniate la stânga)
function afiseazaGlosar() {
    let htmlNotiuni = "";
    for (let [k, v] of Object.entries(glosarExamen.notiumni)) {
        htmlNotiuni += `<p style="margin-bottom: 15px; line-height: 1.6; color: #cbd5e1; text-align: left;"><b>${k}</b> - ${v}</p>`;
    }

    let htmlPersonalitati = "";
    for (let [k, v] of Object.entries(glosarExamen.personalitati)) {
        htmlPersonalitati += `<p style="margin-bottom: 20px; line-height: 1.6; color: #cbd5e1; text-align: left;"><b>${k}</b> ${v}</p>`;
    }

    continutLectie.innerHTML = `
        <div class="lectie-container">
            <div class="lectie-card">
                <h1 style="text-align: center;">Noțiuni și Personalități pentru Examen</h1>
                <p style="text-align: center; color: #38bdf8; margin-bottom: 30px;">Ghid esențial extras din programa de examen pentru clasa a IX-a.</p>
                
                <h2 style="color: #38bdf8; font-family: Georgia, serif; margin-top: 30px; margin-bottom: 20px; border-bottom: 1px solid #1e2d42; padding-bottom: 8px; text-align: center;">NOȚIUNI</h2>
                ${htmlNotiuni}

                <h2 style="color: #38bdf8; font-family: Georgia, serif; margin-top: 40px; margin-bottom: 20px; border-bottom: 1px solid #1e2d42; padding-bottom: 8px; text-align: center;">PERSONALITĂȚI</h2>
                ${htmlPersonalitati}

                <div class="optiuni-navigare" style="justify-content: center;">
                    <button class="btn-urmatoarea" onclick="temaUrmatoare()">Începe temele ➡️</button>
                </div>
            </div>
        </div>
    `;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Marchează răspunsul: Bifa (✓) sau X (✕) în cerculeț în stânga
function marcheazaIntrebare(q, intrebareDiv, inputSelectat){
    const toateInputurile = intrebareDiv.querySelectorAll('input[type="radio"]');

    toateInputurile.forEach((input) => {
        const label = input.closest("label");
        const valoare = Number(input.value);

        label.classList.remove("corect", "gresit");

        if(valoare === q.raspunsCorect){
            label.classList.add("corect");
        } else if(input === inputSelectat){
            label.classList.add("gresit");
        }

        input.disabled = true;
    });
}

// Trecere la tema următoare
function temaUrmatoare(){
    lectieCurenta++;
    if(lectieCurenta >= cheiLectii.length){
        lectieCurenta = 0;
    }
    afiseazaTeme();
    deschideLectia(cheiLectii[lectieCurenta]);
}

// Ecranul de pornire (Home) actualizat
function afiseazaWelcome() {
    lectieCurenta = -1;
    afiseazaTeme();
    continutLectie.innerHTML = `
        <div class="hero-welcome">
            <div class="hero-welcome-card">
                <div class="home-badge">Site de studiu • Clasa a IX-a</div>
                <img src="manual.jpg" alt="Manual Istorie" class="home-cover">
                <h1>Temele din manualul de istorie explicate pe scurt</h1>
                <p>Un site pentru pregătirea de examenul de la Istoria Românilor și Universală</p>
                
                <div class="home-features">
                    <div class="feature-box">
                        <h4>Lecții pe scurt</h4>
                        <p>Cele mai importante idei din fiecare lecție, explicate simplu pentru a învăța mai ușor.</p>
                    </div>
                    <div class="feature-box">
                        <h4>Teste interactive</h4>
                        <p>Verifică-ți rapid cunoștințele după fiecare temă parcursă.</p>
                    </div>
                    <div class="feature-box">
                        <h4>Pentru examen</h4>
                        <p>Tot ce ai nevoie pentru a lua o notă mare la istorie.</p>
                    </div>
                </div>

                <div class="home-note">
                    <p>💡 <b>Sfat:</b> Navighează prin meniul din stânga pentru a accesa lecțiile dorite și testează-ți cunoștințele pas cu pas spre succes.</p>
                </div>

                <button class="btn-start" onclick="temaUrmatoare()">Începe cu prima temă</button>
                <div class="footer-credit">Created by Pavel Viscun</div>
            </div>
        </div>
    `;
}

// Inițializare
afiseazaWelcome();