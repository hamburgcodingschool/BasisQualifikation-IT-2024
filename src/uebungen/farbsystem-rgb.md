---
layout: layout.njk
title: 'RGB Farbsystem'
shortUrl: tinyurl.com/mr3d6mux
---

## Übung 1

### Grundlagen des RGB Farbsystems

Lesen Sie den folgenden Artikel bis zum Abschnitt "Beschränkungen von RGB":

[theColor: Was ist RGB? Merkmale und Bedeutung](https://thecolor.blog/de/was-ist-rgb/)

Beantworten Sie anschließend die folgenden Fragen durch schriftliche Notizen:

1. Welche drei Grundfarben werden im RGB Farbsysteme genutzt?
2. Welche Farbe ist im RGB Farbsysteme zu sehen, wenn keine Farben vorhanden sind?
3. Welche Farbe ist im RGB Farbsystem zu sehen, wenn alle drei Farbkanäle mit maximaler Stärke angezeigt werden?
4. Welche physische Größe wird beim Mischen von Farben im RGB Farbsystem gemischt?
5. Was bedeutet der Begriff "Additive Farbmischung"?
6. Wie unterschiedet sich die Additive Farbmischung z.B. vom Mischen von Ölfarben auf einem Blatt Papier?
7. Für welchen Anwendungsbereich wird das RGB Farbsystem genutzt?
8. Welches ist der kleinste Wert je Farbkanal im RGB Farbsystem?
9. Welches ist der größte Wert je Farbkanal im RGB Farbsystem?

---

## Übung 2

### RGB Farbmischung: Grundfarben

Öffnen Sie dieses Online-Werkzeug zum Mischen von Farben im RGB System:

[schule.de: RGB-Farbmischer](https://informatik.schule.de/rgb/RGB_farbmischer.html)

Durch Verschieben der Schieberegler können Sie die Farben der drei Farbkanäle mischen.

Probieren Sie die folgenden Farben einzustellen. Notieren Sie jeweils den dezimalen RGB-Wert (z.B. `0, 255, 0`)

- Rot
- Grün
- Blau
- Schwarz
- Weiß
- Gelb (Kombination von Rot und Grün)
- Magenta (Kombination aus Rot und Blau)
- Cyan (Kombination von Grün und Blau)

---

## Übung 3

### RGB Farbmischung: Zwischenfarben

Öffnen Sie dieses Online-Werkzeug zum Mischen von Farben im RGB System:

[schule.de: RGB-Farbmischer](https://informatik.schule.de/rgb/RGB_farbmischer.html)

Durch Verschieben der Schieberegler können Sie die Farben der drei Farbkanäle mischen.

Probieren Sie die folgenden Farben einzustellen. Notieren Sie jeweils den dezimalen RGB-Wert (z.B. `128, 128, 0`). Diese Farben sind nicht genau definiert. Es erfordert etwas mehr Experimentieren. Die Angaben müssen nicht genau sein, sondern nur näherungsweise.

- Dunkles Rot
- Dunkles Grün
- Violett
- Helles Grau
- Mittleres Grau
- Dunkles Grau
- Türkis

---

## Übung 4

### RGB Farbwerte

Öffnen Sie dieses Online-Werkzeug zum Mischen von Farben im RGB System:

[schule.de: RGB-Farbmischer](https://informatik.schule.de/rgb/RGB_farbmischer.html)

Durch Verschieben der Schieberegler können Sie die Farben der drei Farbkanäle mischen.

Geben Sie für die folgenden Werte des RGB Farbsystems an welcher Farbeindruck entsteht:

1. `100, 255, 180`
2. `255, 255, 0`
3. `100, 50, 50`
4. `0, 0, 0`
5. `255, 255, 180`
6. `255, 0, 255`
7. `255, 220, 220`
8. `255, 0, 0`
9. `0, 255, 0`
10. `255, 255, 255`
11. `128, 128, 128`
12. `0, 255, 255`
13. `0, 0, 255`

---

## Übung 5

### Tieferes Verständnis des RGB Farbsystems

Beantworten Sie anschließend die folgenden Fragen durch schriftliche Notizen:

1. Wie viele unterschiedliche Farben können je Farbkanal im RGB System dargestellt werden?
2. Wie viele unterschiedliche Farben können insgesamt im RGB Farbsystem dargestellt werden?
3. Wie viele Bit werden benötigt, um einen Farbkanal im RGB Farbsystem darzustellen?
4. Wie viele Bit werden benötigt, um alle Farbkanäle im RGB Farbsystem darzustellen?
5. Wie viele Bit werden benötigt, um die Farben eines Bild von 100 x 50 Bildpunkten darzustellen?

---

## Übung 6

### The Force Shader: Einzelne Farbe

Öffnen Sie den Online Editor [The Force](https://shawnlawson.github.io/The_Force/)

In der zweiten Zeile finden Sie die Farbangabe `black`. Ändern Sie diesen Wert der Reihe nach auf die folgenden Werte und beobachten Sie das Ergebnis:

- `red`
- `green`
- `blue`
- `255, 0, 0`
- `0, 255, 0`
- `0, 0, 255`

Probieren Sie weitere Werte aus.

(Tipp: Wenn sich in einer Zeile ein Fehler befindet, ändert sich die Animation nicht und die Zeile wird rot hinterlegt dargestellt)

---

## Übung 7

### The Force Shader: Radiale Fraktale

Öffnen Sie den Online Editor [The Force](https://shawnlawson.github.io/The_Force/)

Entfernen Sie alle Inhalte und kopieren Sie den folgenden Code in den Editor:

```
vec3 farbe = vec3(0, 255, 255);
float wert1 = 1.0;
float wert2 = 0.5;
float geschwindigkeit = 0.1;

void main () {
    vec2 st = uv(); vec2 stN = uvN();
    float theta = atan(st.x, st.y)/PI2 +.1;
    float phi = log(length(st)) * wert2;
    vec3 c = black;
    float d = phi * noise(rotate(st, vec2(0.0, 0.), time * .1) * wert1) - time * geschwindigkeit;
    c = sin( d * 11. + 1. * farbe);
    vec3 bb = texture2D(backbuffer, stN).rgb;
    c = mix(c, bb, .94) + c * .3;
    gl_FragColor = vec4(c, 1.0);
}
```

In der ersten Zeile des Codes wird die Grundfarbe der Shader Animation festgelegt. Zu der gewählten Farbe wird die Komplementärfarbe sowie Schwarz und Weiß in der Animation genutzt.

Passen Sie die in der ersten Zeile des Codes die Grundfarbe der Animation an.

Wählen Sie Werte nach Ihrem eigenen Interesse.

Anschließend können Sie die drei Werte in den Zeilen darunter verändern und beobachten, wie sich das Ergebnis verändert.

(Tipp: Wenn sich in einer Zeile ein Fehler befindet, ändert sich die Animation nicht und die Zeile wird rot hinterlegt dargestellt)

---

## Übung 8

### Hexadezimale Schreibweise für RGB Farben

RGB Farben können nicht nur im Dezimalsystem (z.B. `255,105,180`), sondern auch im Hexadezimalsystem angegeben werden (z.B `#FF69B4`). Das vorangestellte Hash-Zeichen (`#`) gibt ab, dass es sich um einen Wert im Hexadezimalsystem handelt.

Öffnen Sie die Übersicht benannter Farben: [farb-tabelle.de](https://www.farb-tabelle.de/de/farbtabelle.htm)

Verschaffen Sie sich einen Überblick über einige Farben. Vergleichen Sie Angaben der Farbwerte in dezimaler- und Hexadezimaler Schreibweise.

Beantworten Sie anschließend die folgenden Fragen durch schriftliche Notizen:

1. Geben Sie die Farbe `red` (Rot) in dezimaler und hexadezimaler Schreibweise an.
2. Geben Sie die Farbe `green` (Grün) in dezimaler und hexadezimaler Schreibweise an.
3. Geben Sie die Farbe `blue` (Blau) in dezimaler und hexadezimaler Schreibweise an
4. Geben Sie die Farbe `yellow` (Gelb) in dezimaler und hexadezimaler Schreibweise an
5. Beschreiben Sie wie der hexadezimale Wert aufgebaut?
6. Was ist ein Vorteil der hexadezimalen Schreibweise?

---

## Übung 9

### RGB in der Praxis

Lesen Sie weiter im Artikel der ersten Übung.

[theColor: Was ist RGB? Merkmale und Bedeutung](https://thecolor.blog/de/was-ist-rgb/)

Beantworten Sie anschließend die folgenden Aufgaben durch schriftliche Notizen:

1. Erklären Sie den Begriff "Gamut".
2. Erklären Sie, welche Beschränkung es beim Gamut von RGB gibt.
3. Beschreiben Sie zwei weitere Beschränkung von RGB neben dem Gamut.
4. Welche Bedeutung hat der RGB-Standard "sRGB"?
5. Beschreiben Sie drei Anwendungsgebiete von RGB.
