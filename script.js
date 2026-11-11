const listaTeme = document.getElementById("listaTeme");
const continutLectie = document.getElementById("continutLectie");
const asideMenu = document.getElementById("asideMenu");
const btnMenuToggle = document.getElementById("btnMenuToggle");
const modalLogo = document.getElementById("modalLogo");

const cheiLectii = Object.keys(lectii);
let lectieCurenta = -1; // -1 pentru pagina de bun venit (Home)

if(btnMenuToggle) {
    btnMenuToggle.onclick = () => {
        asideMenu.classList.toggle("deschis");
    };
}

function inchideMeniuMobil() {
    if(asideMenu) {
        asideMenu.classList.remove("deschis");
    }
}

// LOGICĂ PENTRU CLICK PE LOGO (PRIMUL CLICK MĂREȘTE, AL DOILEA DUCE ACASĂ)
function gestioneazaClickLogo(event) {
    event.stopPropagation();
    if (modalLogo) {
        modalLogo.classList.add("activ");
    }
}

function inchideSauMergiAcasa(event) {
    event.stopPropagation();
    if (modalLogo) {
        modalLogo.classList.remove("activ");
    }
    afiseazaWelcome();
}

const glosarExamen = {
    notiumni: {
        "Autonomie": "– reprezintă, din punct de vedere politic, dreptul unui stat, unei minorități sau unei naționalități de a se administra singură, în cadrul unui stat condus de o putere centrală, fără intervenția statului din care face parte.",
        "Cenzură": "– control prealabil exercitat de către un organ al statului asupra conținutului publicațiilor, spectacolelor, emisiunilor de radioteleviziune și, uneori, asupra corespondenței și convorbirilor telefonice.",
        "Colectivizare": "– acțiuni, întreprinse de puterea sovietică, de trecere a mijloacelor de producție în proprietate colectivă prin naționalizare, expropriere etc., procese deseori însoțite de violență, deportări, condamnări.",
        "Comunism": "– este o ideologie care promovează un sistem social în care nu există stat, clase sociale și proprietate privată asupra mijloacelor de producție și care are scopul de a realiza o societate egalitară.",
        "Constituție": "– este un act legislativ, care definește drepturile și libertățile cetățenilor, organizarea puterii legislative, executive și judecătorești; menține și exercită puterea de stat, și alte aspecte considerate esențiale pentru buna funcționare a statului.",
        "Cortina de fier": "– este denumirea dată împărțirii Europei în două blocuri – Occidentul democratic și Estul aflat sub influența și controlul Uniunii Sovietice în perioada Războiului Rece.",
        "Criză economică": "– este un eveniment social de manifestare a declinului economic care poate avea mai multe cauze, iar fazele acestei crize se manifestă printr-o perioadă de stagnare, de recesiune însoțită de inflație.",
        "Cultul personalității": "– exaltarea rolului unei personalități politice în dezvoltarea societății, în cadrul unui regim totalitar.",
        "Cultură de masă": "– o formă de cultură legată de societatea contemporană, adesea asociată cu societatea de consum, în care o mare parte din relațiile dintre oameni este bazată sau guvernată de procese economice și în care consumul și dorințele lor devin fenomene de societate.",
        "Democrație": "– este un regim politic care se bazează pe voința poporului și principiile de bază ale democrației sunt votul universal și suveranitatea națiunii.",
        "Dictatură": "– regim politic în care societatea nu dispune de mecanisme capabile să controleze puterea politică și, prin urmare, un popor este condus forțat de către o persoană, un partid sau un grup de oameni.",
        "Fascism": "– ideologie totalitaristă opusă comunismului, liberalismului și democrației apărută în Italia după Primul Război Mondial, caracterizată prin naționalism extremist, misticism și violență.",
        "Ideologie": "– totalitatea ideilor și concepțiilor care constituie partea teoretică a unui sistem.",
        "Liga Națiunilor": "– a fost o organizație internațională înființată în iunie 1919 în urma Tratatului de la Versailles.",
        "Miracol economic": "– perioadă de dezvoltare economică rapidă și spectaculoasă într-un timp relativ scurt.",
        "Nazism": "– este o ideologie și o politică totalitară naționalistă, rasistă, care au fost aplicate în timpul dictaturii lui Hitler în statul german între 1933–1945.",
        "Organizația Națiunilor Unite": "– este cea mai importantă organizație internațională din lume, fiind fondată pe 24 octombrie 1945, ONU are misiunea de a asigura pacea mondială, respectarea drepturilor omului, cooperarea internațională și respectarea dreptului internațional.",
        "Pact": "– înțelegere scrisă, tratat internațional, bilateral sau multilateral, încheiat în special în scopul menținerii păcii sau al colaborării semnatarilor.",
        "Patrimoniu": "– totalitatea bunurilor materiale și spirituale care aparțin unui popor.",
        "Politică de conciliere": "– politică de împăciuire a agresorului de către alte state prin cedarea unor teritorii sau acceptarea condițiilor lui.",
        "Război rece": "– confruntarea politică, diplomatică, ideologică, economică între cele două superputeri: URSS și SUA, ce a dominat vreme de peste patru decenii relațiile dintre Est și Vest.",
        "Regim democratic": "– se caracterizează prin următoarele trăsături: existența separării puterilor în stat, puterea este legitimată prin intermediul alegerilor libere, respectarea drepturilor și libertăților cetățenești.",
        "Regim totalitar": "– este un regim politic care aplică dictatura unei minorități, prin conducerea și controlul întregii activități în stat, practicând o politică de forță și violență.",
        "Regim autoritar": "– este un regim politic în care nu se respectă drepturile omului, iar guvernanții nu pot fi înlăturați de la putere de către cetățeni prin alegeri libere.",
        "Represiuni": "– represalii; reprimarea prin violență a unei acțiuni de opoziție, acțiuni drastice (arestări, torturi, execuții în masă, deportări) întreprinse în acest scop.",
        "Revizionism": "– este o metodă critică de cercetare, aplicabilă în orice domeniu al cunoașterii, iar atunci când cercetările găsesc noi dovezi, sau când specialiștii descoperă erori în vechile teorii, acestea sunt schimbate, fie abandonate.",
        "Securitate colectivă": "– măsuri de apărare comună împotriva unei agresiuni, stabilite în baza unui tratat.",
        "Tratat": "– este un acord în legea internațională încheiat între două (state) sau mai multe entități internaționale, două state și organizării internaționale.",
        "Ultimatum": "– înștiințare făcută de un stat altui stat, prin notă diplomatică, în care i se atrage atenția că, în cazul în care ar săvârși anumite acte, se vor lua măsuri de constrângere sau se va porni război împotriva lui."
    },
    personalitati: {
        "Ferdinand I (10 octombrie 1914-20 iulie 1927)": "- a acceptat, în Consiliul de Coroană din august 1916, intrarea României în Primul Război Mondial de partea Antantei, făcând primul pas spre România Mare. A refuzat să ratifice pacea separată dintre Puterile Centrale și România. A fost regele României întregite, încoronat la 15 octombrie 1922 la Alba Iulia, a sprijinit reformele înfăptuite în țară, fiind un veritabil monarh constituțional.",
        "Carol al II-lea": "- rege al României (8 iunie 1930-6 septembrie 1940). Obiectivul său central a fost creșterea rolului monarhiei în stat; în 1938 a instaurat regimul de dictatură personală. În septembrie 1940, după cedarea Basarabiei, nordului Bucovinei și ținutului Herța (URSS), a Transilvaniei de Nord-Vest (Ungariei) și a Cadrilaterului (Bulgariei), a abdicat în favoarea fiului său Mihai, iar atribuțiile statului au trecut sub conducerea generalului Ion Antonescu.",
        "Alexei Mateevici (27 martie 1888-24 august 1917)": "- poet, preot și scriitor basarabean. În 1907 a publicat primele versuri în ziarele „Basarabia” și „Țăranii”, precum și poezia „Eu cânt”, alături de articole despre cântecele populare și obiceiurile din Basarabia. Cunoscut pentru contribuția sa la promovarea identității naționale românești. Este autorul poeziei „Limba noastră”, luptând pentru păstrarea limbii române în contextul politicii de rusificare a Imperiului Rus.",
        "Ion Inculeţ (1884-1940)": "- om politic, fizician, membru titular al Academiei Române. Primul președinte al Sfatului Țării (21 noiembrie 1917-2 aprilie 1918), militant al eliberării naționale și unirii cu România. După unire, a deținut funcții importante: ministru al Basarabiei, ministru al sănătății publice, ministru de interne, ministru al comunicațiilor și vicepreședinte al Consiliului de Miniștri al României.",
        "Nicolae Titulescu (1882-1941)": "- diplomat, jurist și om politic român, una dintre cele mai importante personalități ale diplomației europene din perioada interbelică. A fost ministru de externe al României și de două ori președinte al Societății Națiunilor, unde a susținut pacea, securitatea colectivă și cooperarea între state. A promovat activ politica de alianțe, contribuind la consolidarea poziției internaționale a României. A murit în 1941, în exil, Franța.",
        "Alexandru Plămădeală (1888-1940)": "- sculptor basarabean, director al Școlii Comunale de Desen din Chișinău (azi Colegiul Republican de Arte Plastice ce-i poartă numele), profesor de sculptură, desen și modelaj. Capodopera sa este monumentul lui Ștefan cel Mare și Sfânt (1928, Grădina Publică din Chișinău). A mai realizat portrete ale poetului Ion Minulescu, cântăreței Lidia Lipkovski, pictorului Teodorescu-Sion, lui Alexandru Donici și monumentul regelui Ferdinand I.",
        "Constantin Brâncuși (1876-1957)": "- remarkabil sculptor român, autor a numeroase lucrări: Portretul pictorului Dărăscu, Orgoliu, Supliciu, Rugăciunea, Sărutul, Adam și Eva. În 1918 a sculptat în lemn primele coloane, care au căpătat forma definitivă în 1938: Coloana fără sfârșit / Coloana infinitului, parte a ansamblului de la Târgu Jiu, realizat în memoria soldaților căzuți în Primul Război Mondial.",
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
            inchideMeniuMobil();
        };

        listaTeme.appendChild(buton);
    });

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
            inchideMeniuMobil();
        };
        listaTeme.appendChild(btnGlosar);
    }
}

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

function afiseazaGlosar() {
    let htmlNotiuni = "";
    for (let [k, v] of Object.entries(glosarExamen.notiumni)) {
        htmlNotiuni += `<p style="margin-bottom: 15px; line-height: 1.6; color: #cbd5e1; text-align: left;"><b>${k}</b> ${v}</p>`;
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

function temaUrmatoare(){
    lectieCurenta++;
    if(lectieCurenta >= cheiLectii.length){
        lectieCurenta = 0;
    }
    afiseazaTeme();
    deschideLectia(cheiLectii[lectieCurenta]);
}

function afiseazaWelcome() {
    lectieCurenta = -1;
    afiseazaTeme();
    inchideMeniuMobil();
    continutLectie.innerHTML = `
        <div class="hero-welcome">
            <div class="hero-welcome-card">
                <div class="home-badge">Site de studiu • Clasa a IX-a</div>
                <img src="manual.jpg" alt="Manual Istorie" class="home-cover">
                <h1>Temele din manualul de istorie explicate pe scurt</h1>
                <p>Un site pentru pregătirea de examenul de la Istoria Românilor și Universală</p>
                
                <div class="home-features-simple">
                    <div class="feature-item-simplu">
                        <h4>Lecții pe scurt</h4>
                        <p>Cele mai importante idei din fiecare lecție, explicate simplu pentru a învăța mai ușor.</p>
                    </div>
                    <div class="feature-item-simplu">
                        <h4>Teste interactive</h4>
                        <p>Verifică-ți rapid cunoștințele după fiecare temă parcursă.</p>
                    </div>
                    <div class="feature-item-simplu">
                        <h4>Pentru examen</h4>
                        <p>Tot ce ai nevoie pentru a lua o notă mare la istorie.</p>
                    </div>
                </div>

                <div class="home-text-simplu">
                    <p>💡 Navighează prin meniul din stânga ("Teme") pentru a accesa lecțiile dorite și testează-ți cunoștințele.</p>
                </div>

                <button class="btn-start" onclick="temaUrmatoare()">Începe cu prima temă</button>
                <div class="footer-credit">Created by Pavel Viscun</div>
            </div>
        </div>
    `;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

afiseazaWelcome();