# [Är du en riktig gamer?]

## Om sidan
Min sida handlar om att bygga sin egna drömsetup för gaming. Besökaren kan välja mellan olika datorer, hörlurar, tangentbord, skärmar och möss. Sidan är främst till för personer som gillar gaming och datorer, men även för andra som tycker det är kul att jämföra olika setups.

## Skiss

### Länk eller hänvisning till skissfilen i repot.
https://www.figma.com/design/wiRl38pWomY1huAmxug0GS/Untitled?node-id=0-1&p=f

### Skiljer sig den färdiga sidan från skissen? Vad ändrades och varför?
Den skiljer sig inte direkt eftersom skissen är en efterkonstruktion av min hemsida, i och med att jag redan hade påbörjat uppgiften innan vi fick instruktionerna. Jag uppfattade det som att det var okej att börja med uppgiften innan vi fick instruktionerna.
Jag har ändå använt Figma för att ta fram en skiss och se om den kunde komma med några ändringar eller förbättringar. Eftersom jag redan hade gjort stora delar av hemsidan valde jag att behålla min egen design.


## Funktionalitet

### Vad kan besökaren göra på sidan? Vilken fil och vilka funktioner sköter det?
Besökaren kan klicka sig fram mellan olika alternativ för att bygga sitt eget setup. Man kan välja en produkt från varje kategori genom att klicka på bilderna. Jag har använt radio-buttons i HTML för detta, så att man bara kan välja ett alternativ per kategori.

När besökaren väljer en produkt räknas priset ihop automatiskt och visas längst ner på sidan. Om det totala priset är 30 000 eller mer får man meddelandet "Du är en gamer", annars får man "Du är en noob".
Den här funktionen ligger i script.js och heter calculatePrice(). Funktionen går igenom alla inputs och kontrollerar vilka som är valda med hjälp av input.checked. Sedan räknas värdena ihop med Number(input.value) och visas genom textContent.

Jag har också en navigeringsmeny som gör att man kan klicka sig direkt till de olika kategorierna på hemsidan. Jag använder ID i HTML och länkar med href för att navigera mellan sektionerna. I CSS har jag lagt till scroll-behavior: smooth för att få en mjuk scrollning.

En annan funktion är min H4ck3rm0d3-knapp. När man klickar på knappen ändras sidans design till ett hackertema med svart bakgrund och grön text. Klickar man igen ändras sidan tillbaka.
Den funktionen heter hackerMode() och ligger också i script.js. Jag använder addEventListener() för att känna av klicket och classList.toggle() för att byta mellan olika CSS-klasser.


## AI-användning
Minst två exempel. För varje:


### Exempel 1 – Figmas design-AI
Vad bad jag om?
Jag bad AI att göra en skiss i efterhand till mig via Figmas design-AI, eftersom jag redan hade påbörjat min hemsida.

### Vad fick jag?
Jag fick en sida som liknade min egen ganska mycket, fast med en del fel eftersom AI inte riktigt kunde läsa av mina radio-buttons och hur de fungerade.

### Vad gjorde jag med det?
Eftersom jag redan hade gjort sidan använde jag mest Figma för att se om AI kunde göra någonting bättre med designen än vad jag redan hade gjort. Jag tyckte inte att resultatet var bättre än min egen design och använde mig därför inte av Figmas AI-genererade design.


### Exempel 2 – Projektidé och struktur med ChatGPT

### Vad bad jag om?
Jag använde ChatGPT i början av projektet för att få idéer om vad jag skulle göra för hemsida och hur jag skulle kunna strukturera den. Jag ville komma på något som både var roligt att göra och där jag kunde använda HTML, CSS och JavaScript.

### Vad fick jag?
Jag fick idéer på olika projekt och förslag på hur jag kunde strukturera min hemsida. Det hjälpte mig att komma fram till idén om att göra en sida där man kan bygga sin egna gaming-setup genom att välja olika produkter.

### Vad gjorde jag med det?
Jag använde AI förslag som inspiration för att komma igång med projektet. Sedan utvecklade jag idéen vidare och bestämde själv hur hemsidan skulle se ut och vilka funktioner den skulle ha. Jag använde alltså AI mest för att få en grundidé och en struktur att utgå ifrån, istället för att låta AI göra hela projektet åt mig.


## Tekniska val (VG)

### Vilka beslut tog jag, och varför?
Jag valde att dela upp koden i tre filer: index.html, style.css och script.js. Detta gjorde jag för att få bättre struktur och för att det skulle vara lättare att hitta och ändra saker i koden.
Jag använde section och olika ID i HTML för att dela upp sidan i kategorier. Jag gjorde det för att få en tydligare struktur och för att kunna länka till de olika delarna från navigeringsmenyn.

Jag valde att använda radio-buttons för produktvalen eftersom besökaren bara ska kunna välja en produkt inom varje kategori. Jag använde sedan samma name på alla radio-buttons inom en kategori så att de hör ihop.
För att räkna ihop priserna använde jag JavaScript. Jag valde att göra en funktion som går igenom alla inputs varje gång ett val ändras, istället för att behöva räkna ut vad som ska läggas till eller tas bort från summan.
Det gjorde funktionen enklare att hålla koll på och innebär att priset uppdateras även om besökaren ändrar sitt val.

I CSS använde jag Flexbox för att placera produkterna bredvid varandra. Jag använde även flex-wrap och media queries för att sidan ska anpassa sig till olika skärmstorlekar.
Jag använde också position: sticky på min header för att navigeringsmenyn ska följa med när man scrollar. Eftersom headern ligger kvar högst upp använde jag scroll-margin-top på mina sektioner så att rubrikerna inte hamnar bakom headern när man klickar på en länk.

För hackertemat valde jag att använda classList.toggle() i JavaScript istället för att ändra färgerna direkt i koden. På så sätt kunde jag ha designen i CSS och använda JavaScript för att aktivera eller avaktivera den.
Jag använde även querySelectorAll() och forEach() för att kunna ändra flera element samtidigt, istället för att skriva samma kod för varje element.

## Bedömning av AI-innehåll (VG)

### Hur avgjorde jag om det AI gav mig var bra nog?
Jag jämförde resultatet från Figmas AI med min egen hemsida för att se om den hade gjort några förbättringar som jag kunde använda.
Jag kollade bland annat på hur designen såg ut, hur de olika delarna var placerade och om den hade förstått hur min sida skulle fungera. Jag märkte att AI hade svårt att tolka mina radio-buttons och därför blev vissa delar fel.
Eftersom jag redan hade kommit ganska långt med min egen sida tyckte jag inte att AI resultat var tillräckligt bra för att använda istället för min egen design.

### Vad behöll jag, vad ändrade jag, och varför?
Jag valde att behålla min egen design eftersom jag tyckte att den fungerade bättre med de funktioner jag redan hade gjort. AI hade inte riktigt förstått hur mina produktval skulle fungera och därför ville jag inte använda den genererade designen.

Jag gjorde inga större ändringar utifrån AI förslag, men det var ändå användbart att testa eftersom jag fick möjlighet att jämföra min design med ett annat alternativ.
Det fick mig också att inse att AI inte alltid förstår hur en hemsida är tänkt att fungera, även om den kan skapa något som ser bra ut. Därför tycker jag att det är viktigt att granska det AI skapar istället för att bara använda det direkt.

## Tekniska val (VG)

### Vilka beslut tog jag, och varför?
Jag valde att dela upp koden i tre filer: index.html, style.css och script.js. Detta gjorde jag för att få bättre struktur och för att det skulle vara lättare att hitta och ändra saker i koden.
Jag använde section och olika ID i HTML för att dela upp sidan i kategorier. Jag gjorde det för att få en tydligare struktur och för att kunna länka till de olika delarna från navigeringsmenyn.
Jag valde att använda radio-buttons för produktvalen eftersom besökaren bara ska kunna välja en produkt inom varje kategori. Jag använde sedan samma name på alla radio-buttons inom en kategori så att de hör ihop.

För att räkna ihop priserna använde jag JavaScript. Jag valde att göra en funktion som går igenom alla inputs varje gång ett val ändras, istället för att behöva räkna ut vad som ska läggas till eller tas bort från summan. Det gjorde funktionen enklare att hålla koll på och innebär att priset uppdateras även om besökaren ändrar sitt val.

I CSS använde jag Flexbox för att placera produkterna bredvid varandra. Jag använde även flex-wrap och media queries för att sidan ska anpassa sig till olika skärmstorlekar.
Jag använde också position: sticky på min header för att navigeringsmenyn ska följa med när man scrollar. Eftersom headern ligger kvar högst upp använde jag scroll-margin-top på mina sektioner så att rubrikerna inte hamnar bakom headern när man klickar på en länk.

För hackertemat valde jag att använda classList.toggle() i JavaScript istället för att ändra färgerna direkt i koden. På så sätt kunde jag ha designen i CSS och använda JavaScript för att aktivera eller avaktivera den.
Jag använde även querySelectorAll() och forEach() för att kunna ändra flera element samtidigt, istället för att skriva samma kod för varje element.

## Bedömning av AI-innehåll (VG)

### Hur avgjorde jag om det AI gav mig var bra nog?
Jag jämförde resultatet från Figmas AI med min egen hemsida för att se om den hade gjort några förbättringar som jag kunde använda.
Jag kollade bland annat på hur designen såg ut, hur de olika delarna var placerade och om den hade förstått hur min sida skulle fungera. Jag märkte att AI hade svårt att tolka mina radio-buttons och därför blev vissa delar fel.
Eftersom jag redan hade kommit ganska långt med min egen sida tyckte jag inte att AI resultat var tillräckligt bra för att använda istället för min egen design.

### Vad behöll jag, vad ändrade jag, och varför?
Jag valde att behålla min egen design eftersom jag tyckte att den fungerade bättre med de funktioner jag redan hade gjort. AI hade inte riktigt förstått hur mina produktval skulle fungera och därför ville jag inte använda den genererade designen.

Jag gjorde inga större ändringar utifrån AI förslag, men det var ändå användbart att testa eftersom jag fick möjlighet att jämföra min design med ett annat alternativ.
Det fick mig också att inse att AI inte alltid förstår hur en hemsida är tänkt att fungera, även om den kan skapa något som ser bra ut. Därför tycker jag att det är viktigt att granska det AI skapar istället för att bara använda det direkt.
