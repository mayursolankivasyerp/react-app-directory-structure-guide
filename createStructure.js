import fs from 'fs';
import path from 'path';

// Function to create directories and files
function createDirectoryStructure(basePath, structure) {
  Object.entries(structure).forEach(([key, value]) => {
    const fullPath = path.join(basePath, key);

    if (typeof value === 'object') {
      // Create directory
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
        console.log(`Directory created: ${fullPath}`);
      }
      // Recursively create subdirectories/files
      createDirectoryStructure(fullPath, value);
    } else {
      // Create file
      if (!fs.existsSync(fullPath)) {
        fs.writeFileSync(fullPath, '');
        console.log(`File created: ${fullPath}`);
      }
    }
  });
}

// Define the directory structure
const directoryStructure = {
  src: {
    assets: {
      images: {
        'logo.png': '',
      },
      icons: {
        'icon.svg': '',
      },
      fonts: {
        'font.ttf': '',
      },
    },
    styles: {
      base: {
        'reset.css': '',
        'global.css': '',
      },
      common: {
        'variables.scss': '',
        'styledComponent.css': '',
      },
      components: {
        'button.scss': '',
        'input.scss': '',
        'textField.scss': '',
      },
      layouts: {
        'dashboard.scss': '',
        'projectManagement.scss': '',
      },
      'main.scss': '',
    },
    components: {
      common: {
        Button: {
          'Button.jsx': '',
          'Button.styled.js': '',
        },
        Input: {
          'Input.jsx': '',
          'Input.styled.js': '',
        },
      },
      layout: {
        Header: {
          'Header.jsx': '',
          'Header.styled.js': '',
        },
        Sidebar: {
          'Sidebar.jsx': '',
          'Sidebar.styled.js': '',
        },
      },
      modals: {
        ConfirmModal: {
          'ConfirmModal.jsx': '',
          'ConfirmModal.styled.jsx': '',
        },
        InfoModal: {
          'InfoModal.jsx': '',
          'InfoModal.styled.jsx': '',
        },
      },
    },
    hooks: {
      internal: {
        'useAuth.js': '',
        'useFetch.js': '',
      },
      external: {
        'useGoogleMaps.js': '',
        'useStripe.js': '',
      },
    },
    utils: {
      functions: {
        'formatDate.js': '',
      },
      arrays: {
        'manipulateArray.js': '',
        'projectManagementArray.js': '',
      },
      objects: {
        'deepClone.js': '',
      },
      api: {
        'axiosHttp.js': '',
        'api.js': '',
      },
      'constant.js': '',
    },
    helpers: {
      'calculateDiscount.js': '',
      'debounce.js': '',
      'decimalToFix.js': '',
    },
    schemas: {
      'userSchema.js': '',
      'loginSchema.js': '',
    },
    context: {
      'AuthProvider.jsx': '',
      'ThemeProvider.jsx': '',
    },
    pages: {
      Dashboard: {
        'Dashboard.jsx': '',
        'Dashboard.styled.js': '',
        'Dashboard.scss': '',
      },
      Profile: {
        'Profile.jsx': '',
        'Profile.styled.js': '',
        'Profile.scss': '',
      },
    },
    sections: {
      HeaderSections: {
        NavSection: {
          'NavSection.jsx': '',
          'NavSection.styled.js': '',
          'NavSection.scss': '',
        },
      },
      FooterSections: {
        MainFooterSection: {
          'MainFooterSection.jsx': '',
          'MainFooterSection.styled.js': '',
          'MainFooterSection.scss': '',
        },
      },
      HomeSections: {
        HeroSection: {
          'HeroSection.jsx': '',
          'HeroSection.styled.js': '',
          'HeroSection.scss': '',
        },
        FeaturesSection: {
          'FeaturesSection.jsx': '',
          'FeaturesSection.styled.js': '',
          'FeaturesSection.scss': '',
        },
      },
    },
    layouts: {
      'MainLayout.jsx': '',
      'AuthLayout.jsx': '',
    },
    routes: {
      'AppRoutes.jsx': '',
    },
    store: {
      actions: {
        'userActions.js': '',
      },
      reducers: {
        'userReducer.js': '',
      },
      selectors: {
        'userSelectors.js': '',
      },
    },
    services: {
      'authService.js': '',
      'userService.js': '',
      'crmService.js': '',
    },
    config: {
      'env.js': '',
      'apiConfig.js': '',
      'theme.js': '',
    },
    locales: {
      'en.json': '',
      'es.json': '',
    },
    middleware: {
      'authMiddleware.js': '',
      'errorMiddleware.js': '',
    },
    mockdata: {
      'userFactory.js': '',
      'leadFactory.js': '',
    },
    guards: {
      'AuthGuard.jsx': '',
      'RoleGuard.jsx': '',
    },
    forms: {
      'LoginForm.jsx': '',
      'CustomerForm.jsx': '',
    },
    workers: {
      'dataWorker.js': '',
      'notificationWorker.js': '',
    },
    'App.jsx': '',
    'Index.js': '',
  },
};

// Create the directory structure
createDirectoryStructure('.', directoryStructure);
