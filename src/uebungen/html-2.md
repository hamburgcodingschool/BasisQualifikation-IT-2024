---
layout: layout.njk
title: 'HTML Teil 2: HTML-Elemente und Semantik'
shortUrl: tinyurl.com/46p33sf2
---

## Übung 1

### Grundwissen zu HTML

Lesen Sie den Anfang des folgenden Artikels bis zum Abschnitt "inhaltsleere Elemente":

[selfhtml: Element, Tag und Attribut](https://wiki.selfhtml.org/wiki/HTML/Tutorials/Element,_Tag_und_Attribut)

Beantworten Sie anschließend die folgenden Fragen durch schriftliche Notizen:

1. Was bedeutet der Begriff "semantisch"?
2. Was bedeutet der Begriff "Markup"?
3. Wozu dienen "Tags"?
4. Mit welchen zwei Arten von Tags werden fast alle HTML-Elemente gebildet?
5. Wie lautet der einleitende Tag für ein `h1` HTML-Element?
6. Wie lautet der abschließende Tag für ein `h1` HTML-Element?

---

## Übung 2

### Einige grundlegende Tags

Beschreiben Sie durch kurze schriftliche Notizen, welche semantische Bedeutung jeweils diese HTML-Elemente haben:

1. `h1`
2. `h2`
3. `p`
4. `ul`
5. `li`

Lesen Sie auch jeweils die folgenden Artikeln:

- [selfhtml: h1](https://wiki.selfhtml.org/wiki/HTML/Elemente/h1)
- [selfhtml: h2](https://wiki.selfhtml.org/wiki/HTML/Elemente/h2)
- [selfhtml: p](https://wiki.selfhtml.org/wiki/HTML/Elemente/p)
- [selfhtml: ul](https://wiki.selfhtml.org/wiki/HTML/Elemente/ul)
- [selfhtml: li](https://wiki.selfhtml.org/wiki/HTML/Elemente/li)

---

## Übung 3

### Mein erstes HTML Dokument

Öffnen Sie den [Codepen Online Editor](https://codepen.io/pen/?editors=1000).

Stellen Sie sicher, dass Sie in dem Code-Bereich mit der Überschrift "HTML" (rotes Icon) tippen.

Erstellen Sie dort die folgenden drei HTML-Elemente in dieser Reihenfolge:

- Überschrift erster Ordnung
  - mit dem Inhalt "Mein erstes HTML Dokument"
- Überschrift zweiter Ordnung
  - mit dem Inhalt "HTML-Elemente"
- Textabsatz (Paragraph)
  - mit dem Inhalt "HTML-Elemente werden durch Start- und Ende-Tags gekennzeichnet"

---

## Übung 4

### Star Wars Fanpage

Öffnen Sie den [Codepen Online Editor](https://codepen.io/pen/?editors=1000).

Erstellen Sie ein HTML-Dokument, um die folgende Inhalte korrekt auszuzeichnen. Nutzen Sie dazu die Überschriften erster und zweiter Ordnung, Textabsätze sowie Ungeordnete Listen.

```
Meine Star Wars Fanpage

Filme

Dies sind meine liebsten Star Wars Filme:

- A New Hope
- The Empire Strikes Back
- Return of the Jedi

Serien

Diese Serien finde ich besonders gut:

- The Mandalorian
- Andor
- Ahsoka
```

---

## Übung 5

### Textauszeichnungen

Informieren Sie sich in den folgenden Artikeln zur Bedeutung und zum Einsatz des `em` und des `strong` HTML-Elementes:

- [selfhtml: em](https://wiki.selfhtml.org/wiki/HTML/Elemente/em)
- [selfhtml: strong](https://wiki.selfhtml.org/wiki/HTML/Elemente/strong)

Arbeiten Sie weiter an Ihrer Star Wars Fanpage.

Zeichnen Sie die diese Wörter in den beiden Textabschnitten wie folgt aus:

- betont: "meine" und "ich"
- stark betont: "Filme und "Serien"

Orientieren Sie sich dabei an diesem Beispiel:

```
<p>
	Am liebsten lese <em>ich</em> diese <strong>Bücher</strong>:
</p>
```

---

## Übung 6

### Bilder

Informieren Sie sich in dem folgenden Artikeln zur Bedeutung des `img` HTML-Elementes:

[selfhtml: img](https://wiki.selfhtml.org/wiki/HTML/Elemente/img)

Bitte beachten Sie, dass das `img` HTML-Element eine seltene Ausnahme darstelltet. Es besteht nur aus einem Start-Tag und darf kein Ende-Tag haben.

Arbeiten Sie weiter an Ihrer Star Wars Fanpage.

Fügen Sie ein Bild unterhalb der ersten Überschrift zu der Seite hinzu. Nutzen Sie dazu diese Attribute:

| Attribut-Name | Attribut-Wert                                                                                                                          |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| src           | [https://lumiere-a.akamaihd.net/v1/images/grogu-main_89c92eaa.jpeg](https://lumiere-a.akamaihd.net/v1/images/grogu-main_89c92eaa.jpeg) |
| alt           | Star Wars                                                                                                                              |
| width         | 500                                                                                                                                    |

(Sie können die Web-Adressen der Bilder mit der rechten Maustaste anklicken und dann "Adresse kopieren" oder ähnliches wählen. Anschließend können Sie die Web-Adresse in Ihren HTML-Code einfügen)

Orientieren Sie sich an diesem Beispiel:

```
<img src="https://..." alt="Beispiel" width="300">
```

---

## Übung 7

### Links

Informieren Sie sich in dem folgenden Artikeln zur Bedeutung des `a` HTML-Elementes:

[selfhtml: a](https://wiki.selfhtml.org/wiki/HTML/Elemente/a)

Arbeiten Sie weiter an Ihrer Star Wars Fanpage.

Die Listen der Filme sollen durch Links (Verweise) markiert werden.

Nutzen Sie die folgenden Web-Adressen für das `href` Attribut.

| Filme                   | Web-Adresse                                                                                                                                              |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A New Hope              | [https://www.starwars.com/films/star-wars-episode-iv-a-new-hope](https://www.starwars.com/films/star-wars-episode-iv-a-new-hope)                         |
| The Empire Strikes Back | [https://www.starwars.com/films/star-wars-episode-v-the-empire-strikes-back](https://www.starwars.com/films/star-wars-episode-v-the-empire-strikes-back) |
| Return of the Jedi      | [https://www.starwars.com/films/star-wars-episode-vi-return-of-the-jedi](https://www.starwars.com/films/star-wars-episode-vi-return-of-the-jedi)         |

(Sie können die Web-Adressen mit der rechten Maustaste anklicken und dann "Adresse kopieren" oder ähnliches wählen. Anschließend können Sie die Web-Adresse in Ihren HTML-Code einfügen)

Orientieren Sie sich an diesem Beispiel:

```
<li>
	<a href="https://...">
		Beispiel
	</a>
</li>
```

---

## Übung 8

### Weitere Fanpages

Arbeiten Sie weiter an Ihrer Star Wars Fanpage.

Ihre Fanpage soll neben dem Thema Star Wars auch noch Inhalte zu weiteren Vorlieben enthalten. Dazu sollen neben dem eigentliche Hauptinhalt dieser Seite noch weitere Themen als Nebeninhalt gezeigt werden.

Überarbeiten Sie die Struktur Ihrer Fanpage wie folgt

- `main`
  - [...] Alle Ihre bisherigen Inhalte werden von dem `main` HTML-Element umschlossen
- `aside`
  - `article`
    - `h3`
      - "Weitere Themen"
    - `p`
      - "Ich interessiere mich außerdem für Harry Potter"
