import parameterMetadata from './parameterMetadata';

export default {
  presets: '',

  f: parameterMetadata.f.initial,
  k: parameterMetadata.k.initial,
  dA: parameterMetadata.dA.initial,
  dB: parameterMetadata.dB.initial,
  timestep: parameterMetadata.timestep.initial,

  seed: {
    type: 'Circle',
    circle: {
      radius: 100
    },
    rectangle: {
      width: 100,
      height: 100
    },
    image: {
      filename: ''
    }
  },

  renderingStyle: '',

  gradientColors: {
    color1RGB: {r:0, g:0, b:0},
    color2RGB: {r:0, g:255, b:0},
    color3RGB: {r:255, g:255, b:0},
    color4RGB: {r:255, g:0, b:0},
    color5RGB: {r:255, g:255, b:255},

    color1Stop: 0,
    color2Stop: .2,
    color3Stop: .21,
    color4Stop: .4,
    color5Stop: .6,

    color1Enabled: true,
    color2Enabled: true,
    color3Enabled: true,
    color4Enabled: true,
    color5Enabled: true
  }
};