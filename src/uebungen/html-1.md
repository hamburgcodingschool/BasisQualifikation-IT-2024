---
layout: layout.njk
title: 'HTML Teil 1: Die Struktur von HTML'
shortUrl: tinyurl.com/3thuspum
---

## Übung 1

### Ordnungen von Elementen

Betrachten Sie die folgende strukturierte Ordnung von Elementen.

```
welt
	kontinent
		land
			stadt
			/stadt
		/land
	/kontinent
/welt
```

Ihnen fallen diese Eigenschaften auf:

- Jedes Element trägt einen eindeutigen Namen, z.B "`land`". Der Name ist klein geschrieben.
- Die Elemente haben eine Hierarchie. Es gibt über- und untergeordnete Elemente. Ein Land ist Teil eines Kontinents. Ein Kontinent ist Teil der Welt.
- Die Hierarchie wird durch Einrückung verdeutlicht.
- Jedes Element wird durch einen Start (z.B. `land`) und ein Ende (z.B. `/land`) gekennzeichnet. Dem Ende wird ein Schrägstrich (`/`) vor dem Namen des Elementes vorangestellt.

#### Aufgabe

Öffnen Sie den [Online Text Editor](https://www.onlinetexteditor.com/).

Erstellen Sie eine strukturierte Ordnung dieser Art für ein Unternehmen. Verwenden Sie dafür die folgenden Elemente:

- Unternehmen
- Bereich
- Abteilung
- Mitarbeiter

---

## Übung 2

### Ordnungen mit weiteren Elementen

Die strukturierte Ordnung von Elementen ist ausgeweitet. Es ist ein weiteres Land mit einer weiteren Stadt dazu gekommen.

```
welt
	kontinent
		land
			stadt
			/stadt
		/land
		land
			stadt
			/stadt
		/land
	/kontinent
/welt
```

#### Aufgabe

Öffnen Sie den [Online Text Editor](https://www.onlinetexteditor.com/).

Weiten Sie die Struktur Ihres Unternehmens ebenfalls aus. Fügen Sie hinzu:

- Eine weitere Abteilung
- In dieser Abteilung einen weiteren Mitarbeiter

---

## Übung 3

### Attribute zur Kennzeichnung von Elementen

Die Struktur wurde um Attribute erweitert, welche die einzelnen Elemente um weitere Informationen erweitern.

```
welt
	kontinent name="Europa"
		land name="Deutschland"
			stadt name="Berlin"
			/stadt
		/land
		land name="Frankreich"
			stadt name="Paris"
			/stadt
		/land
	/kontinent
/welt
```

Ihnen fällt auf: Die Attribute haben jeweils einen Namen und einen Wert.

- Der Name ist klein geschrieben
- Name und Wert sind mit einem Gleichheitszeichen (`=`) getrennt
- Der Wert ist mit Anführungszeichen (`"`) umschlossen
- Der Aufbau ist: `name="wert"`

#### Aufgabe

Öffnen Sie den [Online Text Editor](https://www.onlinetexteditor.com/).

Fügen Sie in der Struktur Ihres Unternehmens ebenfalls Attribute zur Kennzeichnung der Elemente ein. Achten Sie auf die korrekte Schreibweise.

- Bereich: Hardware
  - Abteilung: Buchhaltung
    - Mitarbeiter Name: Bruno Bilanz
  - Abteilung: Marketing
    - Mitarbeiter Name: Bernd Buzzword

---

## Übung 4

### Spitze Klammern

Sie werden merken, dass mit dem Hinzufügen weiterer Informationen durch Attribute die Übersicht leidet. Betrachten Sie daher die folgenden Anpassungen

```
<welt>
	<kontinent name="Europa">
		<land name="Deutschland">
			<stadt name="Berlin">
			</stadt>
		</land>
		<land name="Frankreich">
			<stadt name="Paris">
			</stadt>
		</land>
	</kontinent>
</welt>
```

Durch das Umschließen der Elemente mit öffnenden und schließenden Spitzen Klammern (`<` und `>`) sind die einzelnen Elemente sowie deren Start und Ende besser zu erkennen.

#### Aufgabe

Öffnen Sie den [Online Text Editor](https://www.onlinetexteditor.com/).

Fügen Sie zu der Struktur Ihres Unternehmens ebenfalls öffnende und schließende Klammern zu den Elementen hinzu.

---

## Übung 5

### Mehr Attribute

Besonders deutlich wird der Vorteil der Spitzen Klammern, wenn Elementen mehrere Attribute hinzugefügt werden. Betrachten Sie dazu das folgende Beispiel.

```
<welt>
	<kontinent name="Europa">
		<land name="Deutschland" fläche="357.588">
			<stadt name="Berlin" einwohner="3.755.251">
			</stadt>
		</land>
		<land name="Frankreich" fläche="632.733">
			<stadt name="Paris" einwohner="2.133.111">
			</stadt>
		</land>
	</kontinent>
</welt>
```

#### Aufgabe

Öffnen Sie den [Online Text Editor](https://www.onlinetexteditor.com/).

Erweitern Sie die Struktur Ihres Unternehmens ebenfalls um weitere Attribute.

- Bereich: Hardware
  - Abteilung: Buchhaltung, Bewerbungen: 5
    - Mitarbeiter Name: Bruno Bilanz, Gehalt 3100
  - Abteilung: Marketing, Bewerbungen: 3
    - Mitarbeiter Name: Bernd Buzzword, Gehalt 3300

---

## Übung 6

### Größere Strukturen

Die folgende Struktur wurde um einige Elemente erweitert.

- Innerhalb von Deutschland wurde eine weitere Stadt hinzugefügt
- Innerhalb von Europa wurde eine weiteres Land hinzugefügt
- Innerhalb der Welt wurde ein weiterer Kontinent hinzugefügt

```
<welt>
	<kontinent name="Europa">
		<land name="Deutschland" fläche="357.588">
			<stadt name="Berlin" einwohner="3.755.251">
			</stadt>
			<stadt name="Hamburg" einwohner="1.905.519">
			</stadt>
		</land>
		<land name="Frankreich" fläche="632.733">
			<stadt name="Paris" einwohner="2.133.111">
			</stadt>
		</land>
		<land name="Spanien" fläche="505.970">
			<stadt name="Madrid" einwohner="3.280.782">
			</stadt>
		</land>
	</kontinent>
	<kontinent name="Afrika">
		<land name="Südafrika">
			<stadt name="Kapstadt einwohner="433.688">
			</stadt>
		</land>
	</kontinent>
</welt>
```

#### Aufgabe

Öffnen Sie den [Online Text Editor](https://www.onlinetexteditor.com/).

Ihr Unternehmen ist gewachsen. Erweitern Sie die Struktur Ihres Unternehmens analog zu dem obigem Beispiel.

- Die Abteilung "Buchhaltung" hat einen weiteren Mitarbeiter: Birgit Beleg, Gehalt 3200 €
- Der Bereich "Hardware" hat eine neue Abteilung: "Kundendienst"
  - Darin arbeitet der Mitarbeiter "Benny Beschwerde", Gehalt 2900 €
- Das Unternehmen hat den neuen Bereich "Software" erschlossen
  - Der Bereich hat die Abteilung "Entwicklung" mit 10 Bewerbungen
    - Dort arbeitetet bereits die Mitarbeiterin "Britta Backup", Gehalt 3900 €

---

## Übung 7

Öffnen Sie den [Online Text Editor](https://www.onlinetexteditor.com/).

Die Buchhaltungsabteilung Ihres Unternehmens ist stark gewachsen. Um die Arbeit besser erledigen zu können, wird die Abteilung in zwei Teams aufgeteilt. Außerdem werden zwei weitere Mitarbeiter eingestellt.

Ändern Sie die Struktur Ihres Unternehmens ab, indem Sie die Abteilung "Buchhaltung" wie folgt in zwei Teams aufteilen:

- Abteilung: Buchhaltung
  - Team, Aufgabe Privatkunden
    - Mitarbeiter Bruno Bilanz
    - Neue Mitarbeiterin: Barbara Budget, Gehalt 3200 €
  - Team, Aufgabe Firmenkunden
    - Mitarbeiter Birgit Beleg
    - Neuer Mitarbeiter: Boris Bargeld, Gehalt 3100 €
